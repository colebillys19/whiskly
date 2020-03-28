import React, { useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import LogoGraphic from '../../images/whiskly-icon.svg';
import LogoText from '../../images/logo.svg';
import {
  Graphic,
  Text,
  StyledMain,
  StyledSection,
} from './styles';

const Landing = () => {
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
          maxWidth="18rem"
          width="40%"
        />
        <Text
          image={LogoText}
          margin="1rem"
          ratio="34%"
          maxWidth="36rem"
          width="85%"
        />
        <SearchForm handleModalOpen={handleModalOpen} />
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </StyledMain>
  );
};

export default Landing;
