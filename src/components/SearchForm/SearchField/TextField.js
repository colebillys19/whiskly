import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import { StyledInputAdornment, StyledTextField } from './styles';

const TextField = ({
  InputProps,
  inputProps,
  ...restProps
}) => {
  const [focused, toggleFocus] = useState(0);

  const startAdornment = (
    <StyledInputAdornment focused={focused} position="start">
      <SearchIcon />
    </StyledInputAdornment>
  );

  const { onBlur, onFocus } = inputProps;

  const handleBlur = () => {
    onBlur();
    toggleFocus(0);
  }

  const handleFocus = () => {
    onFocus();
    toggleFocus(1);
  }

  return (
    <StyledTextField
      InputProps={{ ...InputProps, startAdornment }}
      inputProps={{
        ...inputProps,
        onBlur: handleBlur,
        onFocus: handleFocus,
      }}
      {...restProps}
    />
  );
};

export default TextField;
