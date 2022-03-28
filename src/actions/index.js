
export const ADD_PLACE_INIT = 'ADD_PLACE_INIT'
export const FETCH_ADD_PLACE_INIT = 'FETCH_ADD_PLACE_INIT'

export const addPlaceInit = payload => ({
  type: ADD_PLACE_INIT,
  payload,
})

export const fetchPlaceInit = () => ({
  type: FETCH_ADD_PLACE_INIT,
})

