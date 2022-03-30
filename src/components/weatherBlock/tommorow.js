import React from 'react'

import { TommorowComponent, TommorowTitle, TommorowImg, TommorowTemp  } from './components'
import { getDay } from '../../helpers'
import { useSelector } from 'react-redux'

export const Tommorow = ({day, temp, icon}) => {
  const { checked } = useSelector(store => store)

  return (
    <TommorowComponent>
      <TommorowTitle>{getDay(day)}</TommorowTitle>
      <TommorowImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></TommorowImg>
      <TommorowTemp>{checked ? temp + 34 : temp}°</TommorowTemp>
    </TommorowComponent>
  )
}