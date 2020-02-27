import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { backgroundColor, lightGrey } from '../../styleConstants';

export const StyledButton = styled(Button)`
border-radius: 0.7rem;
  color: ${backgroundColor};
  height: 4.2rem;
  min-width: 0;
  padding: 0;
  width: 5.5rem;
  & span {
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
  margin-left: -4.1rem;
  margin-top: -1rem;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: -1.3rem;
  margin-right: -1.3rem;
  color: ${lightGrey};
`;

export const StyleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 3.5rem;
  margin-top: 1rem;
  width: 27.1rem;
`;
