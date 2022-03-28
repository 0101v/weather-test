import axios from "axios";

// const api = axios.create({
//   baseURL: 'http://api.openweathermap.org/data/2.5'
// });

// api.interceptors.request.use(config => {
//   config.url = config.url + '&units=metric&appid=6f6e06ec8f255a3d6fbd8d98046f1d91';
//   return config;
// });

const API_URL_GEOLOCATION = 'https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708';

export const axiosGeoLocationInstance = () => {
  axios.get(API_URL_GEOLOCATION);
  
}


// export default api;
