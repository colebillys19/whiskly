import React, { useState, Fragment } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import PlaceholderImage from '../../images/placeholder.jpg';
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
          image={PlaceholderImage}
          breakpointStyles={breakpointStyles}
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
