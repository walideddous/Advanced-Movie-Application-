import http from './httpService';
import config from '../config/config.json';

export function getGenres() {
    return http.get(config.apiEndpointGenres)
  }
