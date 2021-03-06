import React, { Fragment, useState } from 'react';

import SearchForm from '../SearchForm';
import InfoModal from '../InfoModal';
import LogoGraphic from '../../images/whiskly-icon.svg';
import LogoText from '../../images/logo.svg';
import {
  Graphic,
  Text,
  StyledSection,
} from './styles';

const LandingView = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
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
      <InfoModal handleModalClose={handleModalClose} open={modalOpen} />
    </Fragment>
  );
};

export default LandingView;
