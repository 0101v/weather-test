import axios from "axios";
import { setupCache } from 'axios-cache-adapter';

//add City and Country
const API_URL_GEOLOCATION = 'https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708';
export const axiosGeoLocationInstance = () => axios.get(API_URL_GEOLOCATION);

//weather init
const cache = setupCache({
  maxAge: 24 * 60 * 1000,
});
const API_URL_WEATHER = 'https://api.openweathermap.org/';
const axiosTempInstance = axios.create({
  baseURL: API_URL_WEATHER,
  timeout: 5000,
  adapter: cache.adapter,
});
export const axiosWeatherInit = (lat, lon) => axiosTempInstance.get('data/2.5/onecall', {
  params: {
    lat: lat,
    lon: lon,
    appid: '6f6e06ec8f255a3d6fbd8d98046f1d91',
    exclude: 'current,minutely,hourly,',
    units: 'metric',
  },
  cache: {
    maxAge: 10 * 60 * 1000,
    exclude: { query: false },
  },
});

export const findGeoLocation = (city) => axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6f6e06ec8f255a3d6fbd8d98046f1d91`)