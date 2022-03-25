import React from 'react'

import { TodayComponent, TodayImg, TodayTitle, TodayTemp, TodayBlock } from './components'
import day from '../../assets/day.svg'

export const Today = () => {

  return (
    <TodayComponent>
      <TodayImg src={day}/>
      <TodayBlock>
        <TodayTitle>TODAY</TodayTitle>
        <TodayTemp>12°</TodayTemp>
      </TodayBlock>
    </TodayComponent>
  )
}