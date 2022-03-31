import { put, call, select, takeLeading } from 'redux-saga/effects'
import { changePlace, LOAD_WEATHER_FOR_PLACE } from '../actions';
import { axiosWeatherInit, findGeoLocation } from '../axios';

import { addPlaceInit } from '../actions'

function* updateWeatherWorker() {
  let { city } = yield select((state) => ({city: state.city}))
  const data = yield call(() => findGeoLocation(city));
  
  if (data.data.length === 0) {
    yield put(changePlace('City?'));
  }
  else {
    const {lat, lon, country, name} = data.data[0];
    if (!Object.values(data.data[0].local_names).includes(city)) {
      city = name;
    }
    const temp = yield call(() => axiosWeatherInit(lat, lon))
    yield put(addPlaceInit({city, country, temp}))
  }
}

export function* weather() {
  yield takeLeading(LOAD_WEATHER_FOR_PLACE, updateWeatherWorker)
}