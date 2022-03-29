import React from 'react'

import { Wrapper, Time, Date, Block, TimeDay } from './components'
import { getFullDate } from '../../api'

export const Clock = () => {
  const [info, setInfo] = React.useState('')
  setInterval(() => {
    setInfo(getFullDate())
  }, 1000)
  


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