import styled, { keyframes } from 'styled-components';

import Image from '../Image';

export const Ellipsis = styled.span`
  position: absolute;
  right: -4.9rem;
  padding-left: 0.8rem;
  width: 4.9rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledImage = styled(Image)`
  animation: ${rotate} 2s linear infinite;
`;

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  color: white;
  margin: 2rem 0 3rem;
  position: relative;
  span {
    font-size: 4rem;
  }
`;
