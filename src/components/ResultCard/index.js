import React from 'react';
import T from 'prop-types';

import {
  MatchText,
  StyledHeading,
  UrlText,
} from './styles';

const ResultCard = ({
  matches,
  title,
  url,
}) => (
  <div>
    <StyledHeading>{title}</StyledHeading>
    <UrlText>{url}</UrlText>
    {matches.map((match) => <MatchText>{match}</MatchText>)}
  </div>
);

ResultCard.propTypes = {
  matches: T.arrayOf(T.string).isRequired,
  title: T.string.isRequired,
  url: T.string.isRequired,
};

export default ResultCard;
