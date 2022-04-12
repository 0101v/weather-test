import React from 'react'

import { ContainerComponent } from './components'
import { Header } from '../components/header'
import { WeatherBlock } from '../components/weatherBlock'
import { Todo } from '../components/todo'
import { useSelector } from 'react-redux'

export const Container = () => {
  const { email } = useSelector(store => store)

  return (
    <ContainerComponent>
      <div>
        <Header/>
        { email 
            ? <Todo email={email}/>
            : null
        }
      </div>
      <WeatherBlock/>
    </ContainerComponent>
  )
}