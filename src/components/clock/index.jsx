import React, {useState, useEffect} from 'react'

import { Wrapper, Time, Date, Block, TimeDay } from './components'
import { getFullDate } from '../../helpers/getDate'
import { useSelector } from 'react-redux'


export const Clock = () => {
  const { timeZone } = useSelector(store => store)
  const [info, setInfo] = useState(getFullDate())

  useEffect(() => {
    const interval = setInterval(() => {
      
      setInfo(getFullDate(timeZone))
    }, 1000)
    return () => clearInterval(interval)
  },)
  

  return (
    <Wrapper>
      <Block>
        <Time>{info.time || ''}</Time>
        <TimeDay>{info.amPm || ''}</TimeDay>
      </Block>
      <Date>{`${info.today || ''}, ${info.day || ''}`}</Date>
    </Wrapper>
  )
}