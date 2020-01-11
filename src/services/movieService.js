import http from "./httpService";
import config from "../config/config.json";

function movieUrl(id){
  return `${config.apiEndpointMovies}/${id}`
}

export function getMovies() {
  return http.get(config.apiEndpointMovies);
}
export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(config.apiEndpointMovies,movie)
}
