import React from 'react';

import LogoGraphic from '../../images/whiskly-icon.svg';

import Image from '../Image';

import { StyledSection, Text } from './styles';

const LandingLoading = () => {
  //
  return (
    <StyledSection>
      <Image
        image={LogoGraphic}
        maxWidth="18rem"
        width="40%"
      />
      <Text>Waking up Heroku servers . . .</Text>
    </StyledSection>
  );
};

export default LandingLoading;
