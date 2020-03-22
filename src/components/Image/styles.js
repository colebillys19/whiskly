import styled from 'styled-components';

export const ImageContainer = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
  margin: ${({ margin }) => margin};
  position: absolute;
  right: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  display: inline-block;
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;
  width: ${({ width }) => width};
  &:after {
    padding-top: ${({ ratio }) => ratio};
    display: block;
    content: '';
  }
  ${({breakpointStyles}) => breakpointStyles}
`;
