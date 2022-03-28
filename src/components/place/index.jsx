import React from 'react'
import Switch from '../switch'
import { addPlaceInit } from '../../actions'
import { useDispatch } from 'react-redux'

import { PlaceComponent, City, Country, SwitchBlock  } from './components'

export const Place = () => {
  const dispatch = useDispatch();
  const [place, setPlace] = React.useState('')

  const func = (even) => {
    dispatch(addPlaceInit())
  }

  return (
    <PlaceComponent>
      <City type="text" value={'City'} onChange={func} size='5' outline='none' autoFocus/>
      <Country>Belarus</Country>
      <SwitchBlock>
        <Switch />
      </SwitchBlock>
    </PlaceComponent>
  )
}