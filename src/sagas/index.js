import { all } from 'redux-saga/effects'
import { fetchPlaceWatcher } from './geolocationSaga'
import { weather } from './updateWeatherSaga'


export default function* rootSaga() {
  yield all([fetchPlaceWatcher(), weather()])
}
