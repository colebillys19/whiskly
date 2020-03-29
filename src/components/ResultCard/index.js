import React from 'react';
import T from 'prop-types';
import { v4 as uuid } from 'uuid';

import {
  StyledLink,
  StyledList,
  StyledListItem,
  UrlText,
} from './styles';

const ResultCard = ({
  matches,
  title,
  url,
}) => (
  <section>
    <StyledLink href={url}>{title}</StyledLink>
    <UrlText>{url}</UrlText>
    <StyledList>
      {matches.map(match => <StyledListItem key={uuid()}>{match}</StyledListItem>)}
    </StyledList>
  </section>
);

ResultCard.propTypes = {
  matches: T.arrayOf(T.string).isRequired,
  title: T.string.isRequired,
  url: T.string.isRequired,
};

export default ResultCard;
