import React from 'react'

import { ContainerComponent } from './components'
import { Header } from '../components/header'
import { TodoList } from '../components/todolist'
import { WeatherBlock } from '../components/weatherBlock'

export const Container = () => {

  return (
    <ContainerComponent>
      <Header/>
      <TodoList/>
      <WeatherBlock/>
    </ContainerComponent>
  )
}