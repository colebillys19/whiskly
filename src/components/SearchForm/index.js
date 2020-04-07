import React from 'react';
import T from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';

import { history } from '../../BrowserRouter';

import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyleWrapper,
} from './styles';
import CohortSelect from './CohortSelect';
import SearchField from './SearchField';

const SearchForm = ({ handleModalOpen }) => {
  const handleClick = event => {
    event.preventDefault();
    const { location: { pathname } } = history;
    if (pathname === '/') {
      history.push('/results');
    } else {
      history.push('/');
    }
  };

  return (
    <StyledForm>
      <SearchField />
      <StyleWrapper>
        <CohortSelect />
        <StyledButton
          disableElevation
          onClick={handleClick}
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
};

SearchForm.propTypes = { handleModalOpen: T.func.isRequired };

export default SearchForm;
