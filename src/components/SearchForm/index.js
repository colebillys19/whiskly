import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyleWrapper,
} from './styledComponents';
import CohortSelect from './CohortSelect';
import SearchField from './SearchField';

const SearchForm = () => (
  <StyledForm>
    <SearchField />
    <StyleWrapper>
      <CohortSelect />
      <StyledButton
        color="primary"
        disableElevation
        variant="contained"
      >
        GO
      </StyledButton>
      <StyledIconButton>
        <InfoIcon />
      </StyledIconButton>
    </StyleWrapper>
  </StyledForm>
);

export default SearchForm;
