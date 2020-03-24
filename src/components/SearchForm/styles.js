import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

export const StyledButton = styled((props) => (
  <Button disableRipple {...props} />
))`
  background-color: #219df9;
  border: 0.2rem solid #219df9;
  border-radius: 0.7rem;
  box-sizing: content-box;
  color: white;
  height: 4rem;
  min-width: 0;
  padding: 0;
  transition: none;
  width: 5.3rem;
  & span {
    font-family: 'Lato', sans-serif;
    font-size: 2.2rem;
  }
  &:hover {
    background-color: #17172b;
  }
  &:focus {
    background-color: white;
    border: 0.2rem solid white;
    color: #17172b;
  }
`;

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -4.1rem;
  margin-top: -2.5rem;
`;

export const StyledIconButton = styled((props) => (
  <IconButton disableRipple {...props} />
))`
  margin-left: -1.3rem;
  margin-right: -1.3rem;
  color: #03f0fe;
  &:focus {
    color: white;
  }
`;

export const StyleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 3.5rem;
  margin-top: 2.5rem;
  width: 27.1rem;
`;
