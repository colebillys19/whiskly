import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { StyledButton, StyledForm, StyleWrapper } from './styledComponents';
import CohortSelect from './sub-components/CohortSelect';
import SearchField from './sub-components/SearchField';

const SearchForm = () => (
  <StyledForm>
    <SearchField />
    <StyleWrapper>
      <CohortSelect />
      <StyledButton variant="outlined">GO</StyledButton>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </StyleWrapper>
  </StyledForm>
);

export default SearchForm;
