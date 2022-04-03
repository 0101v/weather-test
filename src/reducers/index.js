import { 
  ADD_PLACE_INIT, CHANGE_PLACE, CHECKED_TEMP
} from "../actions";

const INITIAL_STATE = {
  city: '',
  country: '',
  week: '',
  checked: false,
  timeZone: ''
}

const weatherReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_PLACE_INIT:
      return {...state, city: payload['city'], country: payload['country_code'] ?? payload['country'], week: payload['week'], timeZone: payload.timeZone}
    case CHANGE_PLACE:
      return {...state, city: payload}
    case CHECKED_TEMP:
      return {...state, checked: payload}
  
    default:
      return state
  }
}

export default weatherReducer