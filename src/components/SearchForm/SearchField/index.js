import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import Context from '../../../Context';
import TextFieldWithAdornment from './TextFieldWithAdornment';
import { findMatches } from './helpers';

const SearchField = () => {
  const [context, setContext] = useContext(Context);
  const { autocompleteOptions, searchInput } = context;

  const handleChange = event => {
    if (event) {
      const searchInput = event.target.value;
      const autocompleteOptions =
        event.target.value.length ? findMatches(event.target.value) : [];
      setContext({ ...context, autocompleteOptions, searchInput });
    }
  };

  const handleClear = () => {
    setContext({ ...context, autocompleteOptions: [] });
  };

  return (
    <Autocomplete
      closeIcon={<CloseIcon />}
      freeSolo={!!autocompleteOptions}
      getOptionLabel={option => option}
      inputValue={searchInput}
      onClose={handleClear}
      onInputChange={handleChange}
      options={autocompleteOptions}
      renderInput={params => <TextFieldWithAdornment {...params} />}
    />
  );
};

export default SearchField;
