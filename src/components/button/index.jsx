import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function IconButtons({pressEnter}) {
  
  return (
      <IconButton onClick={pressEnter} color="primary" aria-label="button">
        <SearchIcon />
      </IconButton>
  );
}
