import styled from 'styled-components';

import Image from '../Image';

export const StyledImage = styled(Image)`
  margin-bottom: 2rem;
`;

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  width: 100%;
`;

export const breakpointStyles = '@media (max-width: 600px) { width: 100%; }';
