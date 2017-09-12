import {JSDOM} from 'jsdom';
import jquery from 'jquery';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import chai, {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import {createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line.
global.window  = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = global.window.document;
global.navigator = global.window.navigator;
const $ = jquery(window); // create an instance of $ with the global window object

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentIntance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentIntance)); // produces HTML
}

// Build helper for simulating event
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  ReactTestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
