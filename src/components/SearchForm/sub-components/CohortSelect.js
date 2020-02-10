import React, { Fragment, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { StyledLabel } from '../styledComponents';

const CohortSelect = () => {
  const [cohort, setCohort] = useState(13);

  const handleChange = event => {
    setCohort(event.target.value);
  };
  
  return (
    <Fragment>
      <StyledLabel>Cohort:</StyledLabel>
      <Select value={cohort} onChange={handleChange}>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
      </Select>
    </Fragment>
  );
};

export default CohortSelect;
