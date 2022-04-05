import React from 'react'

import { HeaderComponent } from './components'
import { Clock } from '../clock'
import { Place } from '../place'
import AuthComponent from '../auth';

export const Header = () => {
  
  return (
    <HeaderComponent>
      <Clock />
      <AuthComponent />
      <Place />
    </HeaderComponent>
  )
}