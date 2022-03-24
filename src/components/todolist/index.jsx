import React from 'react'

import { TodoListComponent, Time, Text } from './components'

export const TodoList = () => {

  return (
    <TodoListComponent>
      <Time>8:00</Time>
      <Text>Make task</Text>
    </TodoListComponent>
  )
}