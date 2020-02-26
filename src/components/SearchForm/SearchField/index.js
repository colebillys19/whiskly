import React  from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';

import TextField from './TextField';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

const SearchField = () => {
  //
  
  return (
    <Autocomplete
      closeIcon={<CloseIcon />}
      forcePopupIcon={false}
      getOptionLabel={option => option.title}
      options={top100Films}
      renderInput={params => <TextField {...params} />}
    />
  );
};

export default SearchField;
