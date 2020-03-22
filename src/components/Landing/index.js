import React, { useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import LogoGraphic from '../../images/whiskly-icon.svg';
import LogoText from '../../images/logo.svg';
import {
  breakpointStyles,
  Graphic,
  Text,
  StyledMain,
  StyledSection,
} from './styles';

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
        <Graphic
          image={LogoGraphic}
          width="20rem"
        />
        <Text
          image={LogoText}
          breakpointStyles={breakpointStyles}
          margin="1rem"
          ratio="34%"
          width="40rem"
        />
        <SearchForm handleModalOpen={handleModalOpen} />
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </StyledMain>
  );
};

export default LandingView;
