import React, { useEffect, useState } from 'react';

import BoneA from '../../images/bone-a.svg';
import BoneB from '../../images/bone-b.svg';
import { StyledImage } from './styles';

import { ellipsisSwitch } from './helpers';
import {
  BonesWrapper,
  Ellipsis,
  StyledSection,
  TextWrapper,
} from './styles';

const LandingLoading = () => {
  const [ellipsisStr, setEllipsisStr] = useState('. . .');

  useEffect(() => {
    const nIntervId = setInterval(() => ellipsisSwitch(ellipsisStr, setEllipsisStr), 500);

    return () => clearInterval(nIntervId);
  });

  return (
    <StyledSection>
      <TextWrapper>
        <span>Loading</span>
        <Ellipsis>{ellipsisStr}</Ellipsis>
      </TextWrapper>
      <BonesWrapper>
        <StyledImage
          animationSpeed="2.5s"
          image={BoneA}
          maxWidth="10rem"
          zIndex="2"
        />
        <StyledImage
          animationSpeed="5s"
          image={BoneB}
          maxWidth="10rem"
          opacity="0.1"
          zIndex="1"
        />
      </BonesWrapper>
    </StyledSection>
  );
};

export default LandingLoading;
