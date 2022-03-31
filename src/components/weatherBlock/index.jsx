import React from 'react'

import { WeatherBlockComponent, TommorowBlock } from './components'
import { Today } from './today'
import { Tommorow } from './tommorow'
import { useSelector } from 'react-redux'

export const WeatherBlock = () => {
  const { week } = useSelector(store => store)
  if (!week) return <WeatherBlockComponent>Loading...</WeatherBlockComponent>;
  const todayObj = {...week[0]};
  const tommorowArr = week.slice(1, 7);
  
  return (
    <WeatherBlockComponent>
      <Today {...todayObj}></Today>
      <TommorowBlock>
        {tommorowArr.map((el, ind) => <Tommorow key={ind} {...el}/>)}
      </TommorowBlock>
    </WeatherBlockComponent>
  )
}