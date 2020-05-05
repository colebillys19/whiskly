import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  @media (max-width: 420px) {
    padding-top: 7vh;
  }
  @media (max-width: 350px) {
    padding-top: 8vh;
  }
`;