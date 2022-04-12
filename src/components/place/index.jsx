/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useEffect } from 'react'
import Switch from '../switch'
import { fetchPlaceInit, changePlace, loadWeatherForPlace } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { IconButtonsSearch } from '../buttons'

import { PlaceComponent, City, Country, SwitchBlock, Wrapper  } from './components'

export const Place = () => {
  
  const dispatch = useDispatch();
  const { city, country } = useSelector(store => store)
  const [cityState, setCityState ] = useState(city)

  useEffect(() => {
    if (!city) dispatch(fetchPlaceInit());
    setCityState(city);
  }, [city])

  const changeValue = (even) => {
    setCityState(even.target.value);
  }
  const pressEnter = (even) => {
    if (even.code === 'Enter' || even.type === 'click') {
      dispatch(changePlace(cityState));
      dispatch(loadWeatherForPlace());
    }
  }

  return (
    <PlaceComponent>
      <Wrapper>
        <div>
          <City type="text" value={cityState} onKeyUp={pressEnter} onChange={changeValue} size='10' outline='none' autoFocus/>
          <Country>{country}</Country>
          <SwitchBlock>
            <Switch />
          </SwitchBlock>
        </div>
        <IconButtonsSearch pressEnter={pressEnter}/>
      </Wrapper>
    </PlaceComponent>
  )
}