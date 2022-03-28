import React from 'react'

import { WeatherBlockComponent, TommorowBlock } from './components'
import { Today } from './today'
import { Tommorow } from './tommorow'

export const WeatherBlock = () => {

  return (
    <WeatherBlockComponent>
      <Today></Today>
      <TommorowBlock>
        <Tommorow></Tommorow>
        <Tommorow></Tommorow>
        <Tommorow></Tommorow>
        <Tommorow></Tommorow>
        <Tommorow></Tommorow>
        <Tommorow></Tommorow>
      </TommorowBlock>
    </WeatherBlockComponent>
  )
}