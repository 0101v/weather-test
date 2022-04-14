import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_ADD_PLACE_INIT } from '../actions';
import { axiosGeoLocationInstance, axiosWeatherInit } from '../axios';

import { addPlaceInit } from '../actions'
import { getDataTemp } from '../helpers/getDataTemp';

function* fetchPlaceWorker() {
  const data = yield call(axiosGeoLocationInstance);
  const {latitude, longitude} = data['data'];
  const temp = yield call(axiosWeatherInit, latitude, longitude)
  
  yield put(addPlaceInit({...data['data'], week: getDataTemp(temp), timeZone: temp.data.timezone, outside: getDataTemp(temp)[0].icon}))
}

export function* fetchPlaceWatcher() {
  yield takeEvery(FETCH_ADD_PLACE_INIT, fetchPlaceWorker)
}