import React from 'react';

import { InconButtonDialogRemove } from '../buttons';

import { Box, Dialog, DialogContent } from '@mui/material';

export const TodoDialogRemove = ({ remove, closeTodoDialog, deleteTodo }) => {

  return (
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
  )
}