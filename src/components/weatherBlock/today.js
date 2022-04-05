import React from 'react'

import { TodayComponent, TodayImg, TodayTitle, TodayTemp, TodayBlock } from './components'
import { getFullDate } from '../../helpers/getDate'
import { useSelector } from 'react-redux'
import { imgRequest, conversionToFahrenheit } from '../../helpers'

export const Today = ({icon, temp}) => {
  const { checked, timeZone } = useSelector(store => store)

  return (
    <TodayComponent>
      <TodayImg src={imgRequest(icon)}/>
      <TodayBlock>
        <TodayTitle>{getFullDate(timeZone).today}</TodayTitle>
        <TodayTemp>{checked ? conversionToFahrenheit(temp) : temp}°</TodayTemp>
      </TodayBlock>
    </TodayComponent>
  )
}