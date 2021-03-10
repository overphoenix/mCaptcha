/*
* Copyright (C) 2021  Aravinth Manivannan <realaravinth@batsense.net>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

use actix_identity::Identity;
use actix_web::{post, web, HttpResponse, Responder};
use log::debug;
use serde::{Deserialize, Serialize};

use crate::errors::*;
use crate::Data;

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct SomeData {
    pub a: String,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Register {
    pub username: String,
    pub password: String,
    pub email: String,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Login {
    pub username: String,
    pub password: String,
}

struct Password {
    password: String,
}

#[post("/api/v1/signup")]
pub async fn signup(
    payload: web::Json<Register>,
    data: web::Data<Data>,
) -> ServiceResult<impl Responder> {
    let username = data.creds.username(&payload.username)?;
    let hash = data.creds.password(&payload.password)?;
    data.creds.email(Some(&payload.email))?;
    sqlx::query!(
        "INSERT INTO mcaptcha_users (name , password, email) VALUES ($1, $2, $3)",
        username,
        hash,
        &payload.email
    )
    .execute(&data.db)
    .await?;
    Ok(HttpResponse::Ok())
}

#[post("/api/v1/signin")]
pub async fn signin(
    id: Identity,
    payload: web::Json<Login>,
    data: web::Data<Data>,
) -> ServiceResult<impl Responder> {
    use argon2_creds::Config;
    use sqlx::Error::RowNotFound;

    let rec = sqlx::query_as!(
        Password,
        r#"SELECT password  FROM mcaptcha_users WHERE name = ($1)"#,
        &payload.username,
    )
    .fetch_one(&data.db)
    .await;

    match rec {
        Ok(s) => {
            if Config::verify(&s.password, &payload.password)? {
                debug!("remembered {}", payload.username);
                id.remember(payload.into_inner().username);
                Ok(HttpResponse::Ok())
            } else {
                Err(ServiceError::WrongPassword)
            }
        }
        Err(RowNotFound) => return Err(ServiceError::UsernameNotFound),
        Err(_) => return Err(ServiceError::InternalServerError)?,
    }
}

#[post("/api/v1/signout")]
pub async fn signout(id: Identity) -> impl Responder {
    if let Some(_) = id.identity() {
        id.forget();
    }
    HttpResponse::Ok()
}

fn is_authenticated(id: &Identity) -> ServiceResult<bool> {
    debug!("{:?}", id.identity());
    // access request identity
    if let Some(_) = id.identity() {
        Ok(true)
    } else {
        Err(ServiceError::AuthorizationRequired)
    }
}

#[cfg(test)]
mod tests {
    use actix_web::http::{header, StatusCode};
    use actix_web::test;

    use super::*;
    use crate::api::v1::services as v1_services;
    use crate::data::Data;
    use crate::*;

    pub async fn delete_user(name: &str, data: &Data) {
        let _ = sqlx::query!("DELETE FROM mcaptcha_users WHERE name = ($1)", name,)
            .execute(&data.db)
            .await;
    }

    macro_rules! post_request {
        ($serializable:expr, $uri:expr) => {
            test::TestRequest::post()
                .uri($uri)
                .header(header::CONTENT_TYPE, "application/json")
                .set_payload(serde_json::to_string($serializable).unwrap())
        };
    }

    macro_rules! get_server {
        () => {
            App::new()
                .wrap(middleware::Logger::default())
                .wrap(get_identity_service())
                .wrap(middleware::Compress::default())
                .wrap(middleware::NormalizePath::new(
                    middleware::normalize::TrailingSlash::Trim,
                ))
                .app_data(get_json_err())
                .configure(v1_services)
        };
    }

    #[actix_rt::test]
    async fn auth_works() {
        let data = Data::new().await;
        const NAME: &str = "testuser";
        const PASSWORD: &str = "longpassword";
        const EMAIL: &str = "testuser1@a.com";

        let mut app = test::init_service(get_server!().data(data.clone())).await;

        delete_user(NAME, &data).await;

        // 1. Register
        let msg = Register {
            username: NAME.into(),
            password: PASSWORD.into(),
            email: EMAIL.into(),
        };
        let resp =
            test::call_service(&mut app, post_request!(&msg, "/api/v1/signup").to_request()).await;
        assert_eq!(resp.status(), StatusCode::OK);

        // 2. check if duplicate username is allowed
        let duplicate_user_resp =
            test::call_service(&mut app, post_request!(&msg, "/api/v1/signup").to_request()).await;
        assert_eq!(duplicate_user_resp.status(), StatusCode::BAD_REQUEST);

        // 3. signin
        let sigin_msg = Login {
            username: NAME.into(),
            password: PASSWORD.into(),
        };
        let signin_resp = test::call_service(
            &mut app,
            post_request!(&sigin_msg, "/api/v1/signin").to_request(),
        )
        .await;
        assert_eq!(signin_resp.status(), StatusCode::OK);
        let cookies = signin_resp.response().cookies().next().unwrap().to_owned();

        // 4. sigining in with non-existent user
        let nonexistantuser = Login {
            username: "nonexistantuser".into(),
            password: msg.password.clone(),
        };
        let userdoesntexist = test::call_service(
            &mut app,
            post_request!(&nonexistantuser, "/api/v1/signin").to_request(),
        )
        .await;
        assert_eq!(userdoesntexist.status(), StatusCode::UNAUTHORIZED);
        let txt: ErrorToResponse = test::read_body_json(userdoesntexist).await;
        assert_eq!(txt.error, format!("{}", ServiceError::UsernameNotFound));

        // 5. trying to signin with wrong password
        let wrongpassword = Login {
            username: NAME.into(),
            password: NAME.into(),
        };
        let wrongpassword_resp = test::call_service(
            &mut app,
            post_request!(&wrongpassword, "/api/v1/signin").to_request(),
        )
        .await;
        assert_eq!(wrongpassword_resp.status(), StatusCode::UNAUTHORIZED);
        let txt: ErrorToResponse = test::read_body_json(wrongpassword_resp).await;
        assert_eq!(txt.error, format!("{}", ServiceError::WrongPassword));

        // 6. signout
        let signout_resp = test::call_service(
            &mut app,
            post_request!(&wrongpassword, "/api/v1/signout")
                .cookie(cookies.clone())
                .to_request(),
        )
        .await;
        assert_eq!(signout_resp.status(), StatusCode::OK);

        delete_user(NAME, &data).await;
    }
}