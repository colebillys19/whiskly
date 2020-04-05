import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import Context from '../../../Context';
import TextField from './TextField';
import { findMatches } from './helpers';

const SearchField = () => {
  const [context, setContext] = useContext(Context);
  const { autocompleteOptions, searchInput } = context;
  
  const handleChange = ({ target: { value } }) => {
    const searchInput = value;
    const autocompleteOptions = value.length ? findMatches(value) : [];
    setContext({ ...context, autocompleteOptions, searchInput });
  };

  const handleBlur = () => {
    setContext({ ...context, autocompleteOptions: [] });
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
      freeSolo={!!autocompleteOptions}
      getOptionLabel={option => option}
      options={autocompleteOptions}
      renderInput={renderInput}
    />
  );
};

export default SearchField;
