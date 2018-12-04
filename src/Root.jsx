import React from 'react';
import { Route, Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store } from 'app/redux/Store';
import {history} from "app/layouts/Routes"
import App from 'app/containers/App';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  )
}

export default hot(module)(Root);
