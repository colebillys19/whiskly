import styled from 'styled-components';

// import Image from '../Image';

// export const StyledImage = styled(Image)`
//   margin-bottom: 2rem;
// `;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const StyledSection = styled.section`
  align-items: center;
  background-color: #17172b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 100rem;
  outline: 0.5rem solid white;
  padding: 2rem 0;
  width: 100%;
`;

export const breakpointStyles = '@media (max-width: 600px) { width: 100%; }';

// 17172b
