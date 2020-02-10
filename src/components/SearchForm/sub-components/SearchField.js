import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const SearchField = () => {
  const adornment = (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );
  return (
    <TextField
      InputProps={{ startAdornment: adornment }}
    
    />
  );
};

export default SearchField;
