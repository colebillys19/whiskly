import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

// import { lightGrey, offBlack } from '../../../styleConstants';

export const StyledInputAdornment = styled(InputAdornment)`
  margin-left: -0.3rem;
  & svg {
    color: white;
  }
`;
// color: ${({ focused }) => focused === 1 ? offBlack : lightGrey};

export const StyledTextField = styled(TextField)`
  margin-left: 4.1rem;
  margin-top: 1rem;
  max-width: 40rem;
  width: 90vw;
  & button svg {
    color: white;
  }
  & .MuiInputBase-input {
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 2.2rem;
  }
  & .MuiInputBase-root {
    height: 4.2rem;
  }

  & .MuiInput-root:before, & .MuiInput-root:after {
    border-color: white;
    border-width: 0.2rem;
  }
  & .MuiInput-root:hover::before {
    border-color: white;
  }
`;
