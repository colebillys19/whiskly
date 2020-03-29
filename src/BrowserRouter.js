import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default class BrowserRouter extends Component {
  render() {
    return <Router history={history} children={this.props.children} />
  }
}
