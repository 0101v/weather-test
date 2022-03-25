import React from 'react'

import { WeatherBlockComponent } from './components'
import { Today } from './today'
import { Tommorow } from './tommorow'

export const WeatherBlock = () => {

  return (
    <WeatherBlockComponent>
      <Today></Today>
      <Tommorow></Tommorow>
      <Tommorow></Tommorow>
      <Tommorow></Tommorow>
      <Tommorow></Tommorow>
      <Tommorow></Tommorow>
      <Tommorow></Tommorow>
    </WeatherBlockComponent>
  )
}