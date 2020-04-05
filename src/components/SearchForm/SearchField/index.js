import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import Context from '../../../Context';
import TextField from './TextField';
import { findMatches } from './helpers';

const SearchField = () => {
  const [state, setState] = useContext(Context);
  const { autocompleteOptions, searchInput } = state;

  const handleChange = ({ target: { value } }) => {
    const searchInput = value;
    const autocompleteOptions = value.length ? findMatches(value) : [];
    setState({ ...state, autocompleteOptions, searchInput });
  };

  const handleBlur = () => {
    setState({ ...state, autocompleteOptions: [] });
  };

  const renderInput = params => (
    <TextField
      onBlur={handleBlur}
      onChange={handleChange}
      value={searchInput}
      {...params}
    />
  );
 
  return (
    <Autocomplete
      closeIcon={<CloseIcon />}
      forcePopupIcon={false}
      freeSolo={!autocompleteOptions.length}
      getOptionLabel={option => option}
      options={autocompleteOptions}
      renderInput={renderInput}
    />
  );
};

export default SearchField;
