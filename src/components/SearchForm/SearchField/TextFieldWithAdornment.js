import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import Context from '../../../Context';
import { findMatches } from './helpers';
import { StyledInputAdornment, StyledTextField } from './styles';

const TextFieldWithAdornment = ({ InputProps, ...restProps }) => {
  const [context, setContext] = useContext(Context);
  const { searchInput } = context;
  
  const handleChange = ({ target: { value } }) => {
    const searchInput = value;
    const autocompleteOptions = value.length ? findMatches(value) : [];
    setContext({ ...context, autocompleteOptions, searchInput });
  };

  const handleBlur = () => {
    setContext({ ...context, autocompleteOptions: [] });
  };

  const startAdornment = (
    <StyledInputAdornment position="start">
      <SearchIcon />
    </StyledInputAdornment>
  );

  return (
    <StyledTextField
      InputProps={{ ...InputProps, startAdornment }}
      onBlur={handleBlur}
      onChange={handleChange}
      value={searchInput}
      {...restProps}
    />
  );
};

export default TextFieldWithAdornment;
