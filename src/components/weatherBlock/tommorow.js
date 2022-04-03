import React from 'react'

import { TommorowComponent, TommorowTitle, TommorowImg, TommorowTemp  } from './components'
import { getDay } from '../../helpers'
import { useSelector } from 'react-redux'
import { imgRequest } from '../../helpers'

export const Tommorow = ({day, temp, icon}) => {
  const { checked } = useSelector(store => store)

  return (
    <TommorowComponent>
      <TommorowTitle>{getDay(day)}</TommorowTitle>
      <TommorowImg src={imgRequest(icon)}></TommorowImg>
      <TommorowTemp>{checked ? temp + 34 : temp}°</TommorowTemp>
    </TommorowComponent>
  )
}