import styled from 'styled-components';

import Image from '../Image';

export const Graphic = styled(Image)`
  position: absolute;
  left: calc(50% - 10rem);
  top: -8rem;
`;

export const Text = styled(Image)`
  margin-bottom: 2rem;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const StyledSection = styled.section`
  align-items: center;
  background: linear-gradient(to left, #2f2f4d, #17172b);
  background-color: #17172b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 100rem;
  outline: 0.5rem solid white;
  padding: 15rem 0 10rem;
  position: relative;
  width: 100%;
`;

export const breakpointStyles = '@media (max-width: 400px) { width: 100%; }';
