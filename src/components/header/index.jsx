import React from 'react'

import { HeaderComponent } from './components'
import { Clock } from '../clock'
import { Place } from '../place'

export const Header = () => {
  
  return (
    <HeaderComponent>
      <Clock />
      <Place />
    </HeaderComponent>
  )
}