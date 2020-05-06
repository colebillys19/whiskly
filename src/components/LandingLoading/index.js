import React, { useEffect, useState } from 'react';

import LogoGraphic from '../../images/whiskly-icon.svg';
import Bone from '../../images/bone.svg';
import Image from '../Image';
import { StyledImage } from './styles';

import { ellipsisSwitch } from './helpers';
import {
  Ellipsis,
  StyledSection,
  TextWrapper,
} from './styles';

const LandingLoading = () => {
  const [ellipsisStr, setEllipsisStr] = useState('. . .');

  useEffect(() => {
    const nIntervId = setInterval(() => ellipsisSwitch(ellipsisStr, setEllipsisStr), 300);

    return () => clearInterval(nIntervId);
  });
 
  return (
    <StyledSection>
      <Image image={LogoGraphic} maxWidth="18rem" />
      <TextWrapper>
        <span>Waking up Heroku servers</span>
        <Ellipsis>{ellipsisStr}</Ellipsis>
      </TextWrapper>
      <StyledImage image={Bone} maxWidth="8rem" />
    </StyledSection>
  );
};

export default LandingLoading;
