// import { join } from 'redux-saga/effects'
import { 
  ADD_PLACE_INIT,
  
} from "../actions";

import { axiosGeoLocationInstance } from "../axios";

const INITIAL_STATE = {
  city: '',
  country: ''
}

const addPlaceInit = (state) => {
  
  return state
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PLACE_INIT':
      return addPlaceInit(state)
  
    default:
      break;
  }
}

export default weatherReducer