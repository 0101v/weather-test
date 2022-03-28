import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_ADD_PLACE_INIT } from '../actions';

import { addPlaceInit } from '../actions'

const fetchLocation = () => fetch('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708')

function* fetchPlaceWorker() {
  const data = yield call(fetchLocation);
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(addPlaceInit(json))
}

export function* fetchPlaceWatcher() {
  yield takeEvery(FETCH_ADD_PLACE_INIT, fetchPlaceWorker)
}