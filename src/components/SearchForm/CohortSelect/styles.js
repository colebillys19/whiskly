import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { backgroundColor, lightGrey } from '../../../styleConstants';

export const CohortSelectWrapper = styled.div`
align-items: center;
display: flex;
& .MuiSelect-icon {
  font-size: 2.5rem !important;
  margin-right: -0.7rem;
}
& .MuiSelect-select:focus {
  background-color: ${backgroundColor};
}
`;

export const StyledLabel = styled.label`
  color: ${lightGrey};
  font-size: 1.8rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
`;

export const StyledSelect = styled(Select)`
  font-family: 'Lato', sans-serif;
  font-size: 2.2rem;
  height: 4.2rem;
  margin-left: 1.2rem;
  width: 5rem;
  & svg {
    color: ${lightGrey};
  }
`;
