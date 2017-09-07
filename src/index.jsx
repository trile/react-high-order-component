import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import HomeIndex from './components/home-index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeIndex}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
