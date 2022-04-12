import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'

import weatherReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const persistedState = () => {
  if (!localStorage.getItem('reduxState')) return {};

  const obj = JSON.parse(localStorage.getItem("reduxState")),
    timestamp = obj.timestamp,
    now = Date.now();
    
  if (timestamp + (3600 * 1000) > now) return JSON.parse(localStorage.getItem('reduxState'));
}
                       
export const store = createStore(
  weatherReducer,
  persistedState(),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
store.subscribe(()=>{
  const objStore = {...store.getState(), timestamp: Date.now()}
  localStorage.setItem('reduxState', JSON.stringify(objStore))
})