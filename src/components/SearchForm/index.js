import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

import { StyledForm, SubForm } from './styledComponents';
import CohortSelect from './sub-components/CohortSelect';
import SearchField from './sub-components/SearchField';

const SearchForm = () => (
  <StyledForm>
    <SearchField />
    <SubForm>
      <CohortSelect />
      <InfoIcon />
    </SubForm>
  </StyledForm>
);

export default SearchForm;
