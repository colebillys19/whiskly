import React, { useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import { StyledSection } from './styles';
import { Fragment } from 'react';

const Results = () => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <StyledSection>
        <SearchForm handleModalOpen={handleModalOpen} />
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </Fragment>
  );
};

export default Results;
