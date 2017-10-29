import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import requireAuth from './components/auth/requireAuth';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
    	<Route path="/" component={App}>
        <IndexRoute  component={Home} />
    		<Route path="/signin" component={SignIn} />
    		<Route path="/signout" component={SignOut} />
    		<Route path="/signup" component={SignUp} />
    		<Route path="/feature" component={requireAuth(Feature)} />
    	</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
