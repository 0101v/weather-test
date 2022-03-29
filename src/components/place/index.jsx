/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Switch from '../switch'
import { fetchPlaceInit } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import { PlaceComponent, City, Country, SwitchBlock  } from './components'

export const Place = () => {
  const dispatch = useDispatch();
  const { city, country } = useSelector(store => store)

  React.useEffect(() => {
    dispatch(fetchPlaceInit());
  })

  const func = (even) => {
    // console.log(even.target.value)
    
  }

  return (
    <PlaceComponent>
      <City type="text" value={city} onChange={func} size='5' outline='none' autoFocus/>
      <Country>{country}</Country>
      <SwitchBlock>
        <Switch />
      </SwitchBlock>
    </PlaceComponent>
  )
}