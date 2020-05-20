import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react';

import Context from '../../Context';
import { pingServers } from '../../globalHelpers';

import InfoModal from '../InfoModal';
import ResultsList from '../ResultsList';
import ResultsLoading from '../ResultsLoading';
import SearchForm from '../SearchForm';
import {
  Divider,
  StyledP,
  StyledSection,
} from './styles';

const Results = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchCohort, setSearchCohort] = useState('');
  const [searchQuery, setSearchQuery] = useState('ReactJS');
  const [context, setContext] = useContext(Context);
  const { results, serversAwake } = context;

  // results = []

  useEffect(() => {
    if (!serversAwake) {
      pingServers(context, setContext);
      // scrape
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    // grab query and cohort from search and set values
  }, [results]); // eslint-disable-line

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <StyledSection>
        <SearchForm handleModalOpen={handleModalOpen} />
        <Divider />
        <StyledP>
          <span>{`${results.length} result${results.length === 1 ? '' : 's'}`}</span>
          <span>{searchQuery ? ` matching "${searchQuery}"` : ''}</span>
        </StyledP>
        {serversAwake && results.length ? <ResultsList /> : <ResultsLoading />}
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={modalOpen} />
    </Fragment>
  );
};

export default Results;
