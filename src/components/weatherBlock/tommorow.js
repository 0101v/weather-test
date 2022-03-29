import React from 'react'

import { TommorowComponent, TommorowTitle, TommorowImg, TommorowTemp  } from './components'
import { getDay } from '../../helpers'

export const Tommorow = ({day, temp, icon}) => {
  
  return (
    <TommorowComponent>
      <TommorowTitle>{getDay(day)}</TommorowTitle>
      <TommorowImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></TommorowImg>
      <TommorowTemp>{temp}</TommorowTemp>
    </TommorowComponent>
  )
}