import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto;
  max-width: 100rem
`;

export const StyledLabel = styled.label``;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
`;

export const StyleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 0 3.5rem;
  @media (max-width: 973px) {
    margin-top: 1.5rem;
  }
`;

export const StyledButton = styled(Button)`
  height: 5rem;
  margin: 0 2rem 0 3.5rem;
  min-width: 0;
  padding: 0;
  width: 6rem;
`;

export const StyledTextField = styled(TextField)`
  min-width: 60rem;
  & .MuiInputBase-root { height: 5rem; }
  & .MuiInputBase-input {
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
  }
`;

export const CohortSelectWrapper = styled.div`
  align-items: center;
  display: flex;
  & .MuiSelect-icon {
    top: 0.7rem;
    right: 0;
  }
`;

export const StyledSelect = styled(Select)`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  height: 5rem;
  width: 7.2rem;
  margin-left: 1rem;
  & .MuiSelect-root {
    height: 5rem;
    padding-bottom: 0;
    padding-top: 0;
    line-height: 4.9rem;
  }
`;
