// import { join } from 'redux-saga/effects'
import { 
  ADD_PLACE_INIT, 
} from "../actions";


const INITIAL_STATE = {
  city: '',
  country: '',
}



const weatherReducer = (state = INITIAL_STATE, {type, payload}) => {
  
  switch (type) {
    case ADD_PLACE_INIT:
      return {...state, city: payload['city'], country: payload['country_name']}
  
    default:
      return state
  }
}

export default weatherReducer