var searchIndex = JSON.parse('{\
"guard":{"doc":"","i":[[0,"data","guard","",null,null],[3,"Data","guard::data","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[11,"new","","",0,[[]]],[0,"errors","guard","",null,null],[4,"ServiceError","guard::errors","",null,null],[13,"InternalServerError","","",1,null],[13,"NotAnEmail","","",1,null],[13,"NotAUrl","","",1,null],[13,"WrongPassword","","",1,null],[13,"UsernameNotFound","","",1,null],[13,"AuthorizationRequired","","",1,null],[13,"ProfainityError","","when the value passed contains profainity",1,null],[13,"BlacklistError","","when the value passed contains blacklisted words see …",1,null],[13,"UsernameCaseMappedError","","when the value passed contains characters not present in …",1,null],[13,"PasswordTooShort","","",1,null],[13,"PasswordTooLong","","",1,null],[13,"UsernameTaken","","when the a username is already taken",1,null],[13,"TokenNameTaken","","when the a token name is already taken",1,null],[13,"HostnameTaken","","when the a host name is already taken",1,null],[13,"CaptchaError","","",1,null],[3,"ErrorToResponse","","",null,null],[12,"error","","",2,null],[5,"dup_error","","",null,[[["serviceerror",4],["error",4]],["serviceerror",4]]],[6,"ServiceResult","","",null,null],[0,"api","guard","",null,null],[0,"v1","guard::api","",null,null],[0,"auth","guard::api::v1","",null,null],[3,"Register","guard::api::v1::auth","",null,null],[12,"username","","",3,null],[12,"password","","",3,null],[12,"email","","",3,null],[3,"Login","","",null,null],[12,"username","","",4,null],[12,"password","","",4,null],[3,"Password","","",null,null],[12,"password","","",5,null],[3,"signup","","",null,null],[3,"signin","","",null,null],[3,"signout","","",null,null],[5,"is_authenticated","","Check if user is authenticated",null,[[["identity",3]],[["serviceerror",4],["result",4]]]],[3,"delete_account","","",null,null],[0,"mcaptcha","guard::api::v1","",null,null],[3,"Domain","guard::api::v1::mcaptcha","",null,null],[12,"name","","",6,null],[3,"add_domain","","",null,null],[3,"delete_domain","","",null,null],[3,"CreateToken","","",null,null],[12,"name","","",7,null],[12,"domain","","",7,null],[3,"TokenKeyPair","","",null,null],[12,"name","","",8,null],[12,"key","","",8,null],[3,"add_mcaptcha","","",null,null],[3,"delete_mcaptcha","","",null,null],[5,"get_random","","",null,[[],["string",3]]],[3,"AddLevels","","",null,null],[12,"levels","","",9,null],[12,"name","","",9,null],[3,"add_levels","","",null,null],[3,"update_levels","","",null,null],[3,"delete_levels","","",null,null],[3,"GetLevels","","",null,null],[12,"token","","",10,null],[3,"get_levels","","",null,null],[3,"Duration","","",null,null],[12,"token_name","","",11,null],[12,"duration","","",11,null],[3,"update_duration","","",null,null],[3,"GetDuration","","",null,null],[12,"duration","","",12,null],[3,"get_duration","","",null,null],[3,"Levels","","",null,null],[12,"levels","","",13,null],[3,"I32Levels","","",null,null],[12,"difficulty_factor","","",14,null],[12,"visitor_threshold","","",14,null],[5,"get_levels_util","","",null,[[["data",3]]]],[0,"meta","guard::api::v1","",null,null],[3,"build_details","guard::api::v1::meta","",null,null],[3,"Health","","Health check return datatype",null,null],[12,"db","","",15,null],[3,"HealthBuilder","","Builder for <code>Health</code>.",null,null],[12,"db","","",16,null],[11,"db","","",16,[[]]],[11,"build","","Builds a new <code>Health</code>.",16,[[],[["health",3],["string",3],["result",4]]]],[3,"health","","",null,null],[5,"services","guard::api::v1","",null,[[["serviceconfig",3]]]],[0,"settings","guard","",null,null],[3,"Server","guard::settings","",null,null],[12,"allow_registration","","",17,null],[12,"port","","",17,null],[12,"domain","","",17,null],[12,"cookie_secret","","",17,null],[12,"ip","","",17,null],[3,"Captcha","","",null,null],[12,"salt","","",18,null],[12,"gc","","",18,null],[11,"get_ip","","",17,[[],["string",3]]],[3,"DatabaseBuilder","","",null,null],[12,"port","","",19,null],[12,"hostname","","",19,null],[12,"username","","",19,null],[12,"password","","",19,null],[12,"name","","",19,null],[12,"url","","",19,null],[11,"extract_database_url","","",19,[[["url",3]]]],[3,"Database","","",null,null],[12,"url","","",20,null],[12,"pool","","",20,null],[3,"Settings","","",null,null],[12,"debug","","",21,null],[12,"database","","",21,null],[12,"server","","",21,null],[12,"pow","","",21,null],[11,"new","","",21,[[],[["configerror",4],["result",4]]]],[5,"set_from_database_url","","",null,[[["config",3],["databasebuilder",3]]]],[5,"set_database_url","","",null,[[["config",3]]]],[3,"Data","guard","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[3,"Settings","","",null,null],[12,"debug","","",21,null],[12,"database","","",21,null],[12,"server","","",21,null],[12,"pow","","",21,null],[3,"SETTINGS","","",null,null],[12,"__private_field","","",22,null],[3,"GIT_COMMIT_HASH","","",null,null],[12,"__private_field","","",23,null],[7,"VERSION","","",null,null],[7,"PKG_NAME","","",null,null],[7,"PKG_DESCRIPTION","","",null,null],[7,"PKG_HOMEPAGE","","",null,null],[5,"main","","",null,[[],["result",6]]],[5,"get_json_err","","",null,[[],["jsonconfig",3]]],[5,"get_identity_service","","",null,[[],[["identityservice",3],["cookieidentitypolicy",3]]]],[11,"from","guard::data","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","guard::errors","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","guard::api::v1::auth","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"vzip","","",24,[[]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"vzip","","",25,[[]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"vzip","","",26,[[]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"vzip","","",27,[[]]],[11,"from","guard::api::v1::mcaptcha","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"vzip","","",28,[[]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"vzip","","",29,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","","",30,[[]]],[11,"into","","",30,[[]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"vzip","","",30,[[]]],[11,"from","","",31,[[]]],[11,"into","","",31,[[]]],[11,"borrow","","",31,[[]]],[11,"borrow_mut","","",31,[[]]],[11,"try_from","","",31,[[],["result",4]]],[11,"try_into","","",31,[[],["result",4]]],[11,"type_id","","",31,[[],["typeid",3]]],[11,"vzip","","",31,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",32,[[]]],[11,"into","","",32,[[]]],[11,"borrow","","",32,[[]]],[11,"borrow_mut","","",32,[[]]],[11,"try_from","","",32,[[],["result",4]]],[11,"try_into","","",32,[[],["result",4]]],[11,"type_id","","",32,[[],["typeid",3]]],[11,"vzip","","",32,[[]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"vzip","","",33,[[]]],[11,"from","","",34,[[]]],[11,"into","","",34,[[]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"vzip","","",34,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",35,[[]]],[11,"into","","",35,[[]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"vzip","","",35,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",36,[[]]],[11,"into","","",36,[[]]],[11,"borrow","","",36,[[]]],[11,"borrow_mut","","",36,[[]]],[11,"try_from","","",36,[[],["result",4]]],[11,"try_into","","",36,[[],["result",4]]],[11,"type_id","","",36,[[],["typeid",3]]],[11,"vzip","","",36,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",37,[[]]],[11,"into","","",37,[[]]],[11,"borrow","","",37,[[]]],[11,"borrow_mut","","",37,[[]]],[11,"try_from","","",37,[[],["result",4]]],[11,"try_into","","",37,[[],["result",4]]],[11,"type_id","","",37,[[],["typeid",3]]],[11,"vzip","","",37,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","guard::api::v1::meta","",38,[[]]],[11,"into","","",38,[[]]],[11,"borrow","","",38,[[]]],[11,"borrow_mut","","",38,[[]]],[11,"try_from","","",38,[[],["result",4]]],[11,"try_into","","",38,[[],["result",4]]],[11,"type_id","","",38,[[],["typeid",3]]],[11,"vzip","","",38,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"from","","",39,[[]]],[11,"into","","",39,[[]]],[11,"borrow","","",39,[[]]],[11,"borrow_mut","","",39,[[]]],[11,"try_from","","",39,[[],["result",4]]],[11,"try_into","","",39,[[],["result",4]]],[11,"type_id","","",39,[[],["typeid",3]]],[11,"vzip","","",39,[[]]],[11,"from","guard::settings","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"vzip","","",18,[[]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"vzip","","",19,[[]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"vzip","","",20,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"vzip","","",21,[[]]],[11,"from","guard","",22,[[]]],[11,"into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"vzip","","",22,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"vzip","","",23,[[]]],[11,"from","guard::errors","",1,[[["credserror",4]],["serviceerror",4]]],[11,"from","","",1,[[["validationerrors",3]],["serviceerror",4]]],[11,"from","","",1,[[["parseerror",4]],["serviceerror",4]]],[11,"from","","",1,[[["captchaerror",4]],["serviceerror",4]]],[11,"from","","",1,[[["error",4]]]],[11,"clone","guard::data","",0,[[],["data",3]]],[11,"clone","guard::errors","",1,[[],["serviceerror",4]]],[11,"clone","guard::api::v1::auth","",3,[[],["register",3]]],[11,"clone","","",4,[[],["login",3]]],[11,"clone","guard::api::v1::mcaptcha","",6,[[],["domain",3]]],[11,"clone","","",7,[[],["createtoken",3]]],[11,"clone","","",8,[[],["tokenkeypair",3]]],[11,"clone","guard::api::v1::meta","",15,[[],["health",3]]],[11,"clone","","",16,[[],["healthbuilder",3]]],[11,"clone","guard::settings","",17,[[],["server",3]]],[11,"clone","","",18,[[],["captcha",3]]],[11,"clone","","",19,[[],["databasebuilder",3]]],[11,"clone","","",20,[[],["database",3]]],[11,"clone","","",21,[[],["settings",3]]],[11,"default","guard::api::v1::meta","",16,[[],["healthbuilder",3]]],[11,"eq","guard::errors","",1,[[["serviceerror",4]]]],[11,"ne","","",1,[[["serviceerror",4]]]],[11,"deref","guard","",22,[[],["settings",3]]],[11,"deref","","",23,[[],["string",3]]],[11,"fmt","guard::errors","",1,[[["formatter",3]],["result",6]]],[11,"fmt","guard::api::v1::auth","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","guard::api::v1::mcaptcha","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","guard::api::v1::meta","",15,[[["formatter",3]],["result",6]]],[11,"fmt","guard::settings","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","guard::errors","",1,[[["formatter",3]],["result",6]]],[11,"source","","",1,[[],[["error",8],["option",4]]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","guard::api::v1::auth","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","guard::api::v1::mcaptcha","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"deserialize","","",14,[[],["result",4]]],[11,"deserialize","guard::api::v1::meta","",15,[[],["result",4]]],[11,"deserialize","guard::settings","",17,[[],["result",4]]],[11,"deserialize","","",18,[[],["result",4]]],[11,"deserialize","","",19,[[],["result",4]]],[11,"deserialize","","",20,[[],["result",4]]],[11,"deserialize","","",21,[[],["result",4]]],[11,"serialize","guard::errors","",2,[[],["result",4]]],[11,"serialize","guard::api::v1::auth","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","guard::api::v1::mcaptcha","",6,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"serialize","","",14,[[],["result",4]]],[11,"serialize","guard::api::v1::meta","",15,[[],["result",4]]],[11,"register","guard::api::v1::auth","",24,[[["appservice",3]]]],[11,"register","","",25,[[["appservice",3]]]],[11,"register","","",26,[[["appservice",3]]]],[11,"register","","",27,[[["appservice",3]]]],[11,"register","guard::api::v1::mcaptcha","",28,[[["appservice",3]]]],[11,"register","","",29,[[["appservice",3]]]],[11,"register","","",30,[[["appservice",3]]]],[11,"register","","",31,[[["appservice",3]]]],[11,"register","","",32,[[["appservice",3]]]],[11,"register","","",33,[[["appservice",3]]]],[11,"register","","",34,[[["appservice",3]]]],[11,"register","","",35,[[["appservice",3]]]],[11,"register","","",36,[[["appservice",3]]]],[11,"register","","",37,[[["appservice",3]]]],[11,"register","guard::api::v1::meta","",38,[[["appservice",3]]]],[11,"register","","",39,[[["appservice",3]]]],[11,"error_response","guard::errors","",1,[[],["httpresponse",3]]],[11,"status_code","","",1,[[],["statuscode",3]]],[11,"initialize","guard","",22,[[]]],[11,"initialize","","",23,[[]]]],"p":[[3,"Data"],[4,"ServiceError"],[3,"ErrorToResponse"],[3,"Register"],[3,"Login"],[3,"Password"],[3,"Domain"],[3,"CreateToken"],[3,"TokenKeyPair"],[3,"AddLevels"],[3,"GetLevels"],[3,"Duration"],[3,"GetDuration"],[3,"Levels"],[3,"I32Levels"],[3,"Health"],[3,"HealthBuilder"],[3,"Server"],[3,"Captcha"],[3,"DatabaseBuilder"],[3,"Database"],[3,"Settings"],[3,"SETTINGS"],[3,"GIT_COMMIT_HASH"],[3,"signup"],[3,"signin"],[3,"signout"],[3,"delete_account"],[3,"add_domain"],[3,"delete_domain"],[3,"add_mcaptcha"],[3,"delete_mcaptcha"],[3,"add_levels"],[3,"update_levels"],[3,"delete_levels"],[3,"get_levels"],[3,"update_duration"],[3,"get_duration"],[3,"build_details"],[3,"health"]]},\
"tests_migrate":{"doc":"","i":[[0,"data","tests_migrate","",null,null],[3,"Data","tests_migrate::data","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[11,"new","","",0,[[]]],[0,"settings","tests_migrate","",null,null],[3,"Server","tests_migrate::settings","",null,null],[12,"allow_registration","","",1,null],[12,"port","","",1,null],[12,"domain","","",1,null],[12,"cookie_secret","","",1,null],[12,"ip","","",1,null],[3,"Captcha","","",null,null],[12,"salt","","",2,null],[12,"gc","","",2,null],[11,"get_ip","","",1,[[],["string",3]]],[3,"DatabaseBuilder","","",null,null],[12,"port","","",3,null],[12,"hostname","","",3,null],[12,"username","","",3,null],[12,"password","","",3,null],[12,"name","","",3,null],[12,"url","","",3,null],[11,"extract_database_url","","",3,[[["url",3]]]],[3,"Database","","",null,null],[12,"url","","",4,null],[12,"pool","","",4,null],[3,"Settings","","",null,null],[12,"debug","","",5,null],[12,"database","","",5,null],[12,"server","","",5,null],[12,"pow","","",5,null],[11,"new","","",5,[[],[["configerror",4],["result",4]]]],[5,"set_from_database_url","","",null,[[["config",3],["databasebuilder",3]]]],[5,"set_database_url","","",null,[[["config",3]]]],[3,"Data","tests_migrate","",null,null],[12,"db","","",0,null],[12,"creds","","",0,null],[12,"captcha","","",0,null],[3,"Settings","","",null,null],[12,"debug","","",5,null],[12,"database","","",5,null],[12,"server","","",5,null],[12,"pow","","",5,null],[3,"SETTINGS","","",null,null],[12,"__private_field","","",6,null],[5,"main","","",null,[[]]],[11,"from","tests_migrate::data","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","tests_migrate::settings","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","tests_migrate","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"clone","tests_migrate::data","",0,[[],["data",3]]],[11,"clone","tests_migrate::settings","",1,[[],["server",3]]],[11,"clone","","",2,[[],["captcha",3]]],[11,"clone","","",3,[[],["databasebuilder",3]]],[11,"clone","","",4,[[],["database",3]]],[11,"clone","","",5,[[],["settings",3]]],[11,"deref","tests_migrate","",6,[[],["settings",3]]],[11,"fmt","tests_migrate::settings","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"initialize","tests_migrate","",6,[[]]],[11,"deserialize","tests_migrate::settings","",1,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]]],"p":[[3,"Data"],[3,"Server"],[3,"Captcha"],[3,"DatabaseBuilder"],[3,"Database"],[3,"Settings"],[3,"SETTINGS"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);