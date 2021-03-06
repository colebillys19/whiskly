import React, { useContext, useEffect } from 'react';

import Context from '../../Context';
import LandingView from '../LandingView';
import LandingLoading from '../LandingLoading';

import { pingServers } from '../../globalHelpers';
import { StyledMain } from './styles';

const Landing = () => {
  const [context, setContext] = useContext(Context);
  const { serversAwake } = context;

  useEffect(() => {
    if (!serversAwake) {
      pingServers(context, setContext);
      // scrape
    };
  }, []); // eslint-disable-line

  return (
    <StyledMain>
      {serversAwake ? <LandingView /> : <LandingLoading />}
    </StyledMain>
  );
};

export default Landing;
