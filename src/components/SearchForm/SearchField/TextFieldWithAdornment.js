import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import Context from '../../../Context';
import { StyledInputAdornment, StyledTextField } from './styles';

const TextFieldWithAdornment = ({ InputProps, ...restProps }) => {
  const [context, setContext] = useContext(Context);
  
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
      {...restProps}
    />
  );
};

export default TextFieldWithAdornment;
