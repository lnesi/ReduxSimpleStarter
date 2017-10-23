import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import {Router, Route, browserHistory} from 'react-router';
import Resources from "./components/resources";
import requireAuth from './components/require_authentication';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.container'));
