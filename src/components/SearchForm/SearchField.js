import React, { Fragment, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/SearchTwoTone';

import { StyledInputAdornment, StyledTextField } from './styles';

const SearchField = () => {
  // for styles
  const [focused, toggleFocus] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const startAdornment = (
    <StyledInputAdornment focused={focused} position="start">
      <SearchIcon />
    </StyledInputAdornment>
  );
  
  return (
    <Fragment>
      <StyledTextField
        InputProps={{ startAdornment }}
        inputProps={{ onBlur: () => toggleFocus(0), onFocus: () => toggleFocus(1) }}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        The content of the Popover.
      </Popover>
    </Fragment>
  );
};

export default SearchField;
