import { all } from 'redux-saga/effects'
import { fetchPlaceWatcher } from './geolocationSaga'

export default function* rootSaga() {
  yield all([fetchPlaceWatcher()])
}
