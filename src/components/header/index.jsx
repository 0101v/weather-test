import React from 'react'

import { HeaderComponent, BlockLeft, BlockRight } from './components'
import { Clock } from '../clock'
import { Place } from '../place'
import AuthComponent from '../auth';
import { Todo } from '../todo'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { email } = useSelector(store => store)

  return (
    <HeaderComponent>
      <BlockLeft>
        <Clock />
        <Place />
      </BlockLeft>
      <BlockRight>
        <AuthComponent />
        { email 
            ? <Todo email={email}/>
            : null
        }
      </BlockRight>
    </HeaderComponent>
  )
}