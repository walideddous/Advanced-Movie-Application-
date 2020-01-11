import http from "../services/httpService";
import config from "../config/config.json";
import jwtDecode from "jwt-decode";

const urlAuth = config.apiEndpointURL + "/auth";
const tokenKey ="token";

export async function login (email, password) {
  const {data : jwt}= await http.post(urlAuth, { email, password });
  localStorage.setItem(tokenKey,jwt);
}

export function logout (){
    localStorage.removeItem(tokenKey);
}

export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey, jwt);

}

export function getCurrentuser() {
  try {
    const jswt = localStorage.getItem(tokenKey);
    return jwtDecode(jswt);
  } catch (ex) {
    return null;
  }
}
function getJwt (){
  return localStorage.getItem(tokenKey)
}
http.setJwt(getJwt())

export default {
  login,
  logout,
  getCurrentuser,
  loginWithJwt,
};
