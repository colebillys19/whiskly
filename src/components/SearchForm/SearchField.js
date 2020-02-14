import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import { StyledInputAdornment, StyledTextField } from './styles';

const SearchField = () => {
  const [focused, toggleFocus] = useState(0);

  const startAdornment = (
    <StyledInputAdornment focused={focused} position="start">
      <SearchIcon />
    </StyledInputAdornment>
  );
  
  return (
    <StyledTextField
      InputProps={{ startAdornment }}
      inputProps={{ onBlur: () => toggleFocus(0), onFocus: () => toggleFocus(1) }}
    />
  );
};

export default SearchField;
