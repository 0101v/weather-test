import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_ADD_PLACE_INIT } from '../actions';
import { axiosGeoLocationInstance, axiosTempInstance } from '../axios';

import { addPlaceInit } from '../actions'

function* fetchPlaceWorker() {
  const data = yield call(axiosGeoLocationInstance);
  yield put(addPlaceInit(data['data']))
}

export function* fetchPlaceWatcher() {
  yield takeEvery(FETCH_ADD_PLACE_INIT, fetchPlaceWorker)
}