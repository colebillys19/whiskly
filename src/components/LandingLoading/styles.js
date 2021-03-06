import styled, { keyframes } from 'styled-components';

import Image from '../Image';

export const BonesWrapper = styled.div`
  height: 10rem;
  position: relative;
  width: 10rem;
`;

export const Ellipsis = styled.span`
  position: absolute;
  right: 0;
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
  animation: ${rotate} ${({ animationSpeed }) => animationSpeed || '2s'} linear infinite;
  opacity: ${({ opacity }) => opacity || '1'};
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || '1'};
`;

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  color: white;
  margin-bottom: 3rem;
  position: relative;
  span {
    font-size: 3.6rem;
  }
  width: 18.2rem;
`;
