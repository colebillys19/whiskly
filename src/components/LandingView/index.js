import React, { useState, Fragment } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
// import PlaceholderImage from '../../images/placeholder.jpg';
import LandingGraphic from '../../images/landing-graphic.png';
import { breakpointStyles, StyledImage, StyledSection } from './styles';

const LandingView = () => {
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
        <StyledImage
          image={LandingGraphic}
          breakpointStyles={breakpointStyles}
          margin="1rem"
          ratio="62.5%"
          width="60rem"
        />
        <SearchForm handleModalOpen={handleModalOpen} />
      </StyledSection>
      <InfoModal handleModalClose={handleModalClose} open={open} />
    </Fragment>
  );
};

export default LandingView;
