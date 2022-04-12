import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Wrapper } from './components'

export const IconButtonsSearch = ({ pressEnter }) => {

  return (
    <IconButton onClick={pressEnter} color="primary" aria-label="button">
      <SearchIcon />
    </IconButton>
  )
}

export const IconButtonAddTodo = ({ handleClickOpen }) => {

  return (
    <Wrapper>
      <IconButton onClick={handleClickOpen} color="primary" aria-label="button" m="auto">
        <AddIcon fontSize="large"/>
      </IconButton>
    </Wrapper>
  )
}

export const InconButtonDialogRemove = ({deleteTodo, closeTodoDialog}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={closeTodoDialog}>Close</Button>
      <Button variant="outlined" onClick={deleteTodo}>Delete</Button>
    </Stack>
  )
}