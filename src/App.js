import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';

import BrowserRouter from './BrowserRouter';
import GlobalStyle from './globalStyles';
import { ContextProvider } from './Context';
import Landing from './components/Landing';
import Results from './components/Results';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/results" component={Results} />
            <Route component={NotFound} />
          </Switch>
          <GlobalStyle />
        </StylesProvider>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
