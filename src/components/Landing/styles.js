import styled from 'styled-components';

import Image from '../Image';

export const Graphic = styled(Image)`
  position: relative;
  top: -8rem;
  @media (max-width: 360px) {
    top: -5.5rem;
  }
`;

export const Text = styled(Image)`
  margin: -4.5rem 0 2rem;
  @media (max-width: 420px) {
    margin-top: -5rem;
  }
  @media (max-width: 360px) {
    margin-top: -3rem;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  @media (max-width: 420px) {
    padding-top: 8vh;
  }
  @media (max-width: 360px) {
    padding-top: 10vh;
  }
`;

export const StyledSection = styled.section`
  align-items: center;
  background-color: #17172b;
  background: linear-gradient(to left, #2f2f4d, #17172b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 100rem;
  outline: 0.5rem solid white;
  padding: 0 0 10rem;
  position: relative;
  width: 100%;
  @media (max-width: 420px) {
    padding-bottom: 7.5rem;
  }
  @media (max-width: 360px) {
    padding-bottom: 5rem;
  }
`;
