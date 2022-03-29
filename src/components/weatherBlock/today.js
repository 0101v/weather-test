import React from 'react'

import { TodayComponent, TodayImg, TodayTitle, TodayTemp, TodayBlock } from './components'
import day from '../../assets/day.svg'
import { getFullDate } from '../../api'
import { useSelector } from 'react-redux'


export const Today = ({icon, temp}) => {

  return (
    <TodayComponent>
      <TodayImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <TodayBlock>
        <TodayTitle>{getFullDate().today}</TodayTitle>
        <TodayTemp>{temp}°</TodayTemp>
      </TodayBlock>
    </TodayComponent>
  )
}