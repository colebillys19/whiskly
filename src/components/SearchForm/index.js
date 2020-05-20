import React, { useContext } from 'react';
import T from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';

import Context from '../../Context';
import { history } from '../../BrowserRouter';
import { fetchResults } from '../../helpers';

import CohortSelect from './CohortSelect';
import SearchField from './SearchField';
import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyleWrapper,
} from './styles';

const SearchForm = ({ handleModalOpen }) => {
  const [context, setContext] = useContext(Context);
  const { cohortInput, searchInput } = context;

  const handleClick = event => {
    event.preventDefault();
    const { location: { pathname } } = history;
    if (pathname === '/') {
      history.push('/results');
    }
    fetchResults(cohortInput, searchInput);
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
