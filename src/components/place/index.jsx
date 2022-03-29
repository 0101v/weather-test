/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Switch from '../switch'
import { fetchPlaceInit, changePlace, loadWeatherForPlace } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import { PlaceComponent, City, Country, SwitchBlock  } from './components'

export const Place = () => {
  
  const dispatch = useDispatch();
  const { city, country } = useSelector(store => store)
  const [cityState, setCityState ] = React.useState(city)

  React.useEffect(() => {
    if (!city) dispatch(fetchPlaceInit());
    setCityState(city);
  }, [city])

  const changeValue = (even) => {
    setCityState(even.target.value);
  }
  const pressEnter = (even) => {
    if (even.code === 'Enter') {
      dispatch(changePlace(cityState));
      dispatch(loadWeatherForPlace());
    }
  }

  return (
    <PlaceComponent>
      <City type="text" value={cityState} onKeyUp={pressEnter} onChange={changeValue} size='5' outline='none' autoFocus/>
      <Country>{country}</Country>
      <SwitchBlock>
        <Switch />
      </SwitchBlock>
    </PlaceComponent>
  )
}