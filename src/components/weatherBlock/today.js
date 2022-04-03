import React from 'react'

import { TodayComponent, TodayImg, TodayTitle, TodayTemp, TodayBlock } from './components'
import { getFullDate } from '../../helpers/getDate'
import { useSelector } from 'react-redux'
import { imgRequest } from '../../helpers'

export const Today = ({icon, temp}) => {
  const { checked, timeZone } = useSelector(store => store)

  return (
    <TodayComponent>
      <TodayImg src={imgRequest(icon)}/>
      <TodayBlock>
        <TodayTitle>{getFullDate(timeZone).today}</TodayTitle>
        <TodayTemp>{checked ? temp + 34 : temp}°</TodayTemp>
      </TodayBlock>
    </TodayComponent>
  )
}