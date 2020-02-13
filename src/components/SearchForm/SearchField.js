import React from 'react';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import { StyledInputAdornment, StyledTextField } from './styledComponents';

const SearchField = () => {
  const startAdornment = (
    <StyledInputAdornment position="start">
      <SearchIcon />
    </StyledInputAdornment>
  );
  
  return (
    <StyledTextField InputProps={{ startAdornment }} />
  );
};

export default SearchField;
