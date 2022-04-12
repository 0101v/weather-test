import React, { useState, useEffect } from 'react';
import { app } from "../../firebase-config";
import firebase from 'firebase';

import { TodoListComponent, InfoBlock, Time, Text, Wrapper } from './components'

import { IconButtonAddTodo } from '../buttons';

import { DeleteOutlineRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { TodoDialogRemove } from './todoDialogRemove';
import { TodoDialogAdd } from './todoDialogAdd';


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
    return () => setTodos('');
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
      { 
        todos.length === 0 
        ? null 
        : <Wrapper>
            {
              todos.map(todo => (
                <TodoListComponent key={todo.id} >
                    <InfoBlock>
                      <Time>{todo.time}</Time>
                      <Text>{todo.text}</Text>
                    </InfoBlock>
                    <IconButton edge="end" aria-label="delete" onClick={() => openTodoDialog(todo.id)}>
                      <DeleteOutlineRounded />
                    </IconButton>     
                </TodoListComponent>
              ))
            }
          </Wrapper>
      }
      <TodoDialogAdd 
        open={open}
        handleClose={handleClose}
        inputTime={inputTime}
        onChangeSelect={onChangeSelect}
        inputText={inputText}
        onChangeText={onChangeText}
        addTodo={addTodo}
      />
      <TodoDialogRemove 
        remove={remove} 
        closeTodoDialog={closeTodoDialog} 
        deleteTodo={deleteTodo}
      />
      
    </>
  );
}