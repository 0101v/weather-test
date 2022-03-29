// import { join } from 'redux-saga/effects'
import { 
  ADD_PLACE_INIT, CHANGE_PLACE
} from "../actions";

const INITIAL_STATE = {
  city: '',
  country: '',
  week: ''
}

const getDataTemp = ({data}) => {
  const week = data['daily'].map(el => {
    return {
      day: new Date(el.dt * 1000).getDay(),
      temp: Math.round(el.temp.max),
      icon: el.weather[0].icon,
    }
  });
  return week
}


const weatherReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_PLACE_INIT:
      return {...state, city: payload['city'], country: payload['country_name'] ?? payload['country'], week: getDataTemp(payload['temp'])}
    case CHANGE_PLACE:
      return {...state, city: payload}
  
    default:
      return state
  }
}

export default weatherReducer