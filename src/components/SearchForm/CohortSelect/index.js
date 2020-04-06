import React, { useContext } from 'react';

import Context from '../../../Context';
import {
  CohortSelectWrapper,
  StyledLabel,
  StyledMenuItem,
  StyledSelect,
} from './styles';

const CohortSelect = () => {
  const [context, setContext] = useContext(Context);
  const { cohortInput } = context;

  const handleChange = ({ target: { value } }) => {
    setContext({ ...context, cohortInput: value });
  };
  
  return (
    <CohortSelectWrapper>
      <StyledLabel>cohort</StyledLabel>
      <StyledSelect onChange={handleChange} value={cohortInput}>
        <StyledMenuItem value={11}>11</StyledMenuItem>
        <StyledMenuItem value={12}>12</StyledMenuItem>
        <StyledMenuItem value={13}>13</StyledMenuItem>
        <StyledMenuItem value={14}>14</StyledMenuItem>
      </StyledSelect>
    </CohortSelectWrapper>
  );
};

export default CohortSelect;
