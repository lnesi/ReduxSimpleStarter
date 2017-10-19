import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
//With the switch the order of the routes is important from the most specific to the less specific
import store from './store';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route exact path="/"  component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
