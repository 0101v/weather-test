import React from 'react'

import { HeaderComponent, Wrapper } from './components'
import { Clock } from '../clock'
import { Place } from '../place'
// import IconButtons from '../button'

export const Header = () => {
  

  return (
    <HeaderComponent>
      <Clock />
      {/* <Wrapper> */}
        <Place />
        {/* <IconButtons /> */}
      {/* </Wrapper> */}
    </HeaderComponent>
  )
}