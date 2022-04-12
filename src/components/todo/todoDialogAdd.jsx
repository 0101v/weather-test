import React from 'react';

import { 
  Button, TextField, Box, 
  InputLabel, MenuItem, FormControl, Select, 
  Dialog, DialogContent, DialogActions 
} from '@mui/material';

export const TodoDialogAdd = ({open, handleClose, inputTime, onChangeSelect, inputText, onChangeText, addTodo}) => {

  return (
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
  )
}