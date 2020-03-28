import React, { Fragment, useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import {
  Divider,
  StyledP,
  StyledSection,
} from './styles';

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
        <Divider />
        <StyledP>Found 6 result(s) in r14 for "React Forms".</StyledP>
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </Fragment>
  );
};

export default Results;
