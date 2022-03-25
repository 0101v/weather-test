import React from 'react'

import { TommorowComponent, TommorowTitle, TommorowImg, TommorowTemp  } from './components'
import day from '../../assets/day.svg'

export const Tommorow = () => {

  return (
    <TommorowComponent>
      <TommorowTitle>TUE</TommorowTitle>
      <TommorowImg src={day}></TommorowImg>
      <TommorowTemp>12°</TommorowTemp>
    </TommorowComponent>
  )
}