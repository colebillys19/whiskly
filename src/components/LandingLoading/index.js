import React, { useEffect, useState } from 'react';

import BoneA from '../../images/bone-a.svg';
import BoneB from '../../images/bone-b.svg';
import { StyledImage } from './styles';

import { ellipsisSwitch } from './helpers';
import {
  BonesWrapper,
  Ellipsis,
  StyledSection,
  SubstringWrapper,
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
        <span>Waking up Heroku </span>
        <SubstringWrapper>
          servers
          <Ellipsis>{ellipsisStr}</Ellipsis>
        </SubstringWrapper>
      </TextWrapper>
      <BonesWrapper>
        <StyledImage
          animationSpeed="2.5s"
          image={BoneA}
          maxWidth="10rem"
          zIndex="2"
        />
        <StyledImage
          animationSpeed="4.5s"
          image={BoneB}
          maxWidth="10rem"
          opacity="0.3"
          zIndex="1"
        />
      </BonesWrapper>
    </StyledSection>
  );
};

export default LandingLoading;
