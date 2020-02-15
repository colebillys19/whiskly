import React from 'react';
import T from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';

import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyleWrapper,
} from './styles';
import CohortSelect from './CohortSelect';
import SearchField from './SearchField';

const SearchForm = ({ handleModalOpen }) => (
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
      <StyledIconButton onClick={handleModalOpen} type="button">
        <InfoIcon />
      </StyledIconButton>
    </StyleWrapper>
  </StyledForm>
);

SearchForm.propTypes = { handleModalOpen: T.func.isRequired };

export default SearchForm;
