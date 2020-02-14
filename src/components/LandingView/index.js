import React from 'react';

import SearchForm from '../SearchForm';
import PlaceholderImage from '../../images/placeholder.jpg';
import { breakpointStyles, StyledImage, StyledSection } from './styles';

const LandingView = () => (
  <StyledSection>
    <StyledImage
      image={PlaceholderImage}
      breakpointStyles={breakpointStyles}
      ratio="62.5%"
      width="60rem"
    />
    <SearchForm />
  </StyledSection>
);

export default LandingView;
