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
  const [context, setContext] = useContext(Context);
  const { serversAwake } = context;

  // temp...
  const data = true;

  useEffect(() => {
    if (!serversAwake) {
      pingServers(context, setContext);
    };
  }, []); // eslint-disable-line

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
        <StyledP>Found 6 result(s) in r14 for "React Forms".</StyledP>
        {serversAwake && data ? <ResultsList /> : <ResultsLoading />}
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={modalOpen} />
    </Fragment>
  );
};

export default Results;
