import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import SignIn from './components/auth/SignIn';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
    	<Route path="/" component={App}>
    		<Route path="/signin" component={SignIn} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
