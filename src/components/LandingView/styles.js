import styled from 'styled-components';

import Image from '../Image';

export const StyledImage = styled(Image)`
  margin-bottom: 3rem;
`;

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export const breakpointStyles = '@media (max-width: 600px) { width: 100%; }';
