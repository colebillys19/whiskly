import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import Context from '../../../Context';
import TextField from './TextField';
import { findMatches } from './helpers';

const SearchField = () => {
  const [state, setState] = useContext(Context);
  const { autocompleteOptions, searchInput } = state;

  const handleChange = event => {
    const searchInput = event.target.value;
    const autocompleteOptions = findMatches(event.target.value);
    setState({ ...state, autocompleteOptions, searchInput });
  };

  const renderInput = params => (
    <TextField
      onChange={handleChange}
      value={searchInput}
      {...params}
    />
  );
 
  return (
    <Autocomplete
      closeIcon={<CloseIcon />}
      forcePopupIcon={false}
      getOptionLabel={option => option}
      options={autocompleteOptions}
      renderInput={renderInput}
    />
  );
};

export default SearchField;
