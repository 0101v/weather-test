import React from 'react'

import { ContainerComponent } from './components'
import { WeatherBlock } from '../components/weatherBlock'
import { Header } from '../components/header'

export const Container = () => {

  return (
    <ContainerComponent >
      <Header />
      <WeatherBlock/>
    </ContainerComponent>
  )
}