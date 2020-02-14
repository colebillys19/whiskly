import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import theme from '../../muiTheme';

export const CohortSelectWrapper = styled.div`
  align-items: center;
  display: flex;
  & .MuiSelect-icon {
    font-size: 2.5rem !important;
    margin-right: -0.7rem;
  }
  & .MuiSelect-select:focus {
    background-color: white;
  }
`;

export const StyledButton = styled(Button)`
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
`;

export const StyledInputAdornment = styled(InputAdornment)`
  margin-left: -0.3rem;
  & svg { color: ${({ focused }) => focused === 1 ? theme.palette.primary.main : 'inherit' }; }
`;

export const StyledLabel = styled.label`
  font-size: 1.8rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2rem;
`;

export const StyledSelect = styled(Select)`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2.2rem;
  height: 4.2rem;
  margin-left: 1.3rem;
  padding-top: 0.2rem;
  width: 4.6rem;
  & :focus { color: ${theme.palette.primary.main}; }
`;

export const StyledTextField = styled(TextField)`
  margin-left: 4.1rem;
  margin-top: 1rem;
  max-width: 60rem;
  width: 90vw;
  & .MuiInputBase-input {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2.2rem;
    &:focus { color: ${theme.palette.primary.main}; }
  }
  & .MuiInputBase-root { height: 4.2rem; }
`;

export const StyleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 4.1rem;
  margin-top: 1rem;
  width: 27rem;
`;
