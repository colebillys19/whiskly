import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import { StyledTextField } from '../styledComponents';

const SearchField = () => {
  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );
  
  return (
    <StyledTextField InputProps={{ startAdornment }} />
  );
};

export default SearchField;
