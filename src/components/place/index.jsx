import React from 'react'
import { Switch } from '../switch'

import { PlaceComponent, City, Country } from './components'

export const Place = () => {

  const func = (e) => {
    console.log(e.target.value)
  }

  return (
    <PlaceComponent>
      <City type="text" value={'Minsk'}  onChange={func} size='1' outline='none' autoFocus/>
      <Country>Belarus</Country>
      <Switch />
    </PlaceComponent>
  )
}