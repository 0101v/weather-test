import React, { useState, useEffect } from 'react';
import { app } from "../../firebase-config";
import firebase from 'firebase';

import { TodoListComponent, Time, Text, Wrapper } from './components'

import { IconButtonAddTodo, InconButtonDialogRemove } from '../buttons';

import { DeleteOutlineRounded } from '@mui/icons-material';
import { 
  Button, TextField, IconButton, Box, 
  InputLabel, MenuItem, FormControl, Select, 
  Dialog, DialogContent, DialogActions 
} from '@mui/material';


export const Todo = ({ email }) => {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [open, setOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [removeId, setRemoveId] = useState('');
  
  
  useEffect(() => {
    app.collection(email).orderBy("time", "asc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          text: doc.data().text,
          time: doc.data().time,
        }
      }))
    })
  }, [email]);

  const addTodo = (event) => {
    event.preventDefault();
    app.collection(email).add({
      text: inputText,
      time: inputTime,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInputText('');
    setInputTime('');
    handleClose();
  }

  const deleteTodo = () => {
    app.collection(email).doc(removeId).delete();
    setRemove(false);
  }

  const openTodoDialog = (id) => {
    setRemove(true);
    setRemoveId(id);
  }
  const closeTodoDialog = () => {
    setRemove(false);
  }

  const onChangeText = (even) => {
    setInputText(even.target.value);
  }
  const onChangeSelect = (even) => {
    setInputTime(even.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <IconButtonAddTodo handleClickOpen={handleClickOpen}/>
      {todos.length === 0 ? null : 
        <Wrapper>
        {
          todos.map(todo => (
            <TodoListComponent key={todo.id} >
                <div>
                  <Time>{todo.time}</Time>
                  <Text>{todo.text}</Text>
                </div>
                <IconButton edge="end" aria-label="delete" onClick={() => openTodoDialog(todo.id)}>
                  <DeleteOutlineRounded />
                </IconButton>     
            </TodoListComponent>
          ))
        }
      </Wrapper>}
      
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent> 
          <Box
            noValidate
            autoComplete="off"
            component="form"
            overflowY= 'none'
            width= '270px'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 0,              
            }}
          >
            <FormControl sx={{ m: -1}} >       
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputTime}
                label="Time"
                onChange={onChangeSelect}
              >
                <MenuItem value='08:00'>08:00</MenuItem>
                <MenuItem value='10:00'>10:00</MenuItem>
                <MenuItem value='12:00'>12:00</MenuItem>
                <MenuItem value='14:00'>14:00</MenuItem>
                <MenuItem value='16:00'>16:00</MenuItem>
                <MenuItem value='18:00'>18:00</MenuItem>
                <MenuItem value='20:00'>20:00</MenuItem>
              </Select>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                label="Enter Text"
                name="text"
                value={inputText}

                onChange={onChangeText}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={addTodo}
                disabled={!inputText || !inputTime}
              >
                Add Todo
              </Button> 
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={remove}
        onClose={closeTodoDialog}
      >
        <DialogContent> 
          <Box
            noValidate
            component="form"
            overflowY= 'none'
            sx={{
              display: 'flex',
              m: 0,              
            }}
          >
            <InconButtonDialogRemove deleteTodo={deleteTodo} closeTodoDialog={closeTodoDialog}/>            
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}