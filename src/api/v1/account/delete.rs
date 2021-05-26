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
use actix_web::{web, HttpResponse, Responder};

use super::auth::Password;
use crate::errors::*;
use crate::Data;

#[my_codegen::post(path="crate::V1_API_ROUTES.account.delete", wrap="crate::CheckLogin")]
async fn delete_account(
    id: Identity,
    payload: web::Json<Password>,
    data: web::Data<Data>,
) -> ServiceResult<impl Responder> {
    use argon2_creds::Config;
    use sqlx::Error::RowNotFound;

    let username = id.identity().unwrap();

    let rec = sqlx::query_as!(
        Password,
        r#"SELECT password  FROM mcaptcha_users WHERE name = ($1)"#,
        &username,
    )
    .fetch_one(&data.db)
    .await;

    id.forget();

    match rec {
        Ok(s) => {
            if Config::verify(&s.password, &payload.password)? {
                sqlx::query!("DELETE FROM mcaptcha_users WHERE name = ($1)", &username)
                    .execute(&data.db)
                    .await?;
                Ok(HttpResponse::Ok())
            } else {
                Err(ServiceError::WrongPassword)
            }
        }
        Err(RowNotFound) => return Err(ServiceError::UsernameNotFound),
        Err(_) => return Err(ServiceError::InternalServerError)?,
    }
}

pub fn services(cfg: &mut actix_web::web::ServiceConfig) {
    cfg.service(delete_account);
//    use crate::define_resource;
//    use crate::V1_API_ROUTES;
//
//    define_resource!(
//        cfg,
//        V1_API_ROUTES.account.delete,
//        Methods::ProtectPost,
//        delete_account
//    );
}