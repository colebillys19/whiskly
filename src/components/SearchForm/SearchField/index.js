import React, { useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import Context from '../../../Context';
import TextFieldWithAdornment from './TextFieldWithAdornment';

const SearchField = () => {
  const [context, setContext] = useContext(Context); // eslint-disable-line
  const { autocompleteOptions } = context;
   
  return (
    <Autocomplete
      closeIcon={<CloseIcon />}
      forcePopupIcon={false}
      freeSolo={!!autocompleteOptions}
      getOptionLabel={option => option}
      options={autocompleteOptions}
      renderInput={params => <TextFieldWithAdornment {...params} />}
    />
  );
};

export default SearchField;
