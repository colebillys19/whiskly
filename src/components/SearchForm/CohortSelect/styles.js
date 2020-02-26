import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import theme from '../../../muiTheme';
import { backgroundOffWhite } from '../../../styleConstants';

export const CohortSelectWrapper = styled.div`
align-items: center;
display: flex;
& .MuiSelect-icon {
  font-size: 2.5rem !important;
  margin-right: -0.7rem;
}
& .MuiSelect-select:focus {
  background-color: ${backgroundOffWhite};
}
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
  width: 4.7rem;
  & :focus { color: ${theme.palette.primary.main}; }
`;
