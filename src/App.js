import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import BrowserRouter from './BrowserRouter';
import muiTheme from './muiTheme';
import GlobalStyle from './globalStyles';
import Landing from './components/Landing';
import Results from './components/Results';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/results" component={Results} />
          <Route component={NotFound} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
