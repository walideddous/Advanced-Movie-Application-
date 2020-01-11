import http from "./httpService";
import config from "../config/config.json";

const configuser = config.apiEndpointURL +'/users';

export function register (user){
    return http.post(configuser,{
        email: user.username,
        password: user.password,
        name: user.name
    })
}