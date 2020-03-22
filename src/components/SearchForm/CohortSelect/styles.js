import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const CohortSelectWrapper = styled.div`
align-items: center;
display: flex;
& .MuiSelect-icon {
  font-size: 2.5rem !important;
  margin-right: -0.7rem;
}
& .MuiSelect-select:focus {
  background-color: rgba(255, 255, 255, 0.2);
}
& .MuiInput-root:before, & .MuiInput-root:after {
  border-color: white;
  border-width: 0.2rem;
}
& .MuiInput-root:hover::before {
  border-color: white;
}
`;

export const StyledLabel = styled.label`
  color: white;
  opacity: 0.5;
  font-size: 1.8rem;
  font-weight: 300;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
`;

export const StyledSelect = styled(Select)`
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 2.2rem;
  height: 4.2rem;
  margin-left: 1.2rem;
  width: 5rem;
  & svg {
    color: white;
    right: 0.2rem;
  }
`;
