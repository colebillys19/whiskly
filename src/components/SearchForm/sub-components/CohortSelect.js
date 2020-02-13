import React, { useState } from 'react';

import {
  CohortSelectWrapper,
  StyledLabel,
  StyledMenuItem,
  StyledSelect,
} from '../styledComponents';

const CohortSelect = () => {
  const [cohort, setCohort] = useState(13);

  const handleChange = event => {
    setCohort(event.target.value);
  };
  
  return (
    <CohortSelectWrapper>
      <StyledLabel>cohort</StyledLabel>
      <StyledSelect
        onChange={handleChange}
        value={cohort}
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
