import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import Header from './components/header' ;

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {/* <Switch> */}
      <div>
        <Header />
        <Route exact path='/' component={App}></Route>
        <Route path='/resources' component={requireAuth(Resources)}></Route>
      </div>
      {/* </Switch> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
