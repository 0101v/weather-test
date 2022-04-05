import { 
  ADD_PLACE_INIT, CHANGE_PLACE, CHECKED_TEMP, ADD_EMAIL
} from "../actions";

const INITIAL_STATE = {
  city: '',
  country: '',
  week: '',
  checked: false,
  timeZone: '',
  email: ''
}

const weatherReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_PLACE_INIT:
      return {...state, city: payload['city'], country: payload['country_code'] ?? payload['country'], week: payload['week'], timeZone: payload.timeZone}
    case CHANGE_PLACE:
      return {...state, city: payload}
    case CHECKED_TEMP:
      return {...state, checked: payload}
    case ADD_EMAIL:
      return {...state, email: payload}

    default:
      return state
  }
}

export default weatherReducer