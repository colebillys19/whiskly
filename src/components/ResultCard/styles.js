import styled from 'styled-components';

export const StyledLink = styled.a`
  color: white;
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus, &:active {
    color: #219df9;
  }
  & :visited {
    opacity: 0.6;
  }
`;

export const StyledList = styled.ul`
  list-style-type: circle;
  padding-right: 2rem;
`;

export const StyledListItem = styled.li`
  color: white;
  font-size: 1.6rem;
  left: 2rem;
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const UrlText = styled.p`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  opacity: 0.6;
  overflow-wrap: break-word;
`;
