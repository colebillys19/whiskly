import React, { Fragment } from 'react';
import T from 'prop-types';
import { v4 as uuid } from 'uuid';

import mockData from '../../mockData';
import ResultCard from '../ResultCard';
import { Divider, ListContainer } from './styles';


const ResultsList = ({ results }) => (
  <ListContainer>
    {results.map((cardProps, i) => (
      <Fragment key={uuid()}>
        <ResultCard {...cardProps} />
        { i !== results.length - 1 ? <Divider /> : null }
      </Fragment>
    ))}
  </ListContainer>
);

ResultsList.propTypes = { results: T.array.isRequired };

ResultsList.defaultProps = { results: mockData };

export default ResultsList;
