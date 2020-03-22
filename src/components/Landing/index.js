import React, { useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
// import LandingGraphic from '../../images/landing-graphic.png';
import { StyledMain, StyledSection } from './styles';

const LandingView = () => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <StyledMain>
      <StyledSection>
        <SearchForm handleModalOpen={handleModalOpen} />
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </StyledMain>
  );
};

export default LandingView;
