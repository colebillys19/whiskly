import React, { useContext } from 'react';

import Context from '../../../Context';
import {
  CohortSelectWrapper,
  StyledLabel,
  StyledMenuItem,
  StyledSelect,
} from './styles';

const CohortSelect = () => {
  const [state, setState] = useContext(Context);

  const handleChange = event => {
    setState({ ...state, cohortInput: event.target.value });
  };
  
  return (
    <CohortSelectWrapper>
      <StyledLabel>cohort</StyledLabel>
      <StyledSelect
        onChange={handleChange}
        value={state.cohortInput}
      >
        <StyledMenuItem value={11}>11</StyledMenuItem>
        <StyledMenuItem value={12}>12</StyledMenuItem>
        <StyledMenuItem value={13}>13</StyledMenuItem>
        <StyledMenuItem value={14}>14</StyledMenuItem>
      </StyledSelect>
    </CohortSelectWrapper>
  );
};

export default CohortSelect;
