import React from 'react'

import { TodayComponent, TodayImg, TodayTitle, TodayTemp, TodayBlock } from './components'
import { getFullDate } from '../../api'
import { useSelector } from 'react-redux'


export const Today = ({icon, temp}) => {
  const { checked } = useSelector(store => store)


  return (
    <TodayComponent>
      <TodayImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <TodayBlock>
        <TodayTitle>{getFullDate().today}</TodayTitle>
        <TodayTemp>{checked ? temp + 34 : temp}°</TodayTemp>
      </TodayBlock>
    </TodayComponent>
  )
}