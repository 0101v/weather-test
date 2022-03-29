import { put, takeEvery, call, select } from 'redux-saga/effects'
import { LOAD_WEATHER_FOR_PLACE } from '../actions';
import { axiosWeatherInit, findGeoLocation } from '../axios';

import { addPlaceInit } from '../actions'

function* updateWeatherWorker() {
  const { city } = yield select((state) => ({city: state.city}))
  const data = yield call(() => findGeoLocation(city));
  const {lat, lon, country} = data.data[0];
  const temp = yield call(() => axiosWeatherInit(lat, lon))
  yield put(addPlaceInit({city, country, temp}))
}

export function* weather() {
  yield takeEvery(LOAD_WEATHER_FOR_PLACE, updateWeatherWorker)
}