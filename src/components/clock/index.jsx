import React from 'react'

import { Wrapper, Time, Date, Block, TimeDay } from './components'

export const Clock = () => {

  return (
    <Wrapper>
      <Block>
        <Time>12:30</Time>
        <TimeDay>PM</TimeDay>
      </Block>
      <Date>Monday, 2 February 2022</Date>
    </Wrapper>
  )
}