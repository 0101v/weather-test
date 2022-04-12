
export const ADD_PLACE_INIT = 'ADD_PLACE_INIT'
export const FETCH_ADD_PLACE_INIT = 'FETCH_ADD_PLACE_INIT'

export const CHANGE_PLACE = 'CHANGE_PLACE'
export const LOAD_WEATHER_FOR_PLACE = 'LOAD_WEATHER_FOR_PLACE'

export const CHECKED_TEMP = 'CHECKED_TEMP'

export const ADD_EMAIL = 'ADD_EMAIL'

export const addPlaceInit = payload => ({
  type: ADD_PLACE_INIT,
  payload,
})
export const fetchPlaceInit = () => ({
  type: FETCH_ADD_PLACE_INIT,
})

export const changePlace = payload => ({
  type: CHANGE_PLACE,
  payload,
})
export const loadWeatherForPlace = () => ({
  type: LOAD_WEATHER_FOR_PLACE,
})

export const chackedTemp = payload => ({
  type: CHECKED_TEMP,
  payload,
})

export const addEmail = payload => ({
  type: ADD_EMAIL,
  payload,
})
