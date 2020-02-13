import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyleWrapper,
} from './styledComponents';
import CohortSelect from './sub-components/CohortSelect';
import SearchField from './sub-components/SearchField';

const SearchForm = () => (
  <StyledForm>
    <SearchField />
    <StyleWrapper>
      <CohortSelect />
      <StyledButton
        color="secondary"
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
