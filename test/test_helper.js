import jsdom  from 'jsdom';
//if we import $ will try to boot inmediatly to set itself by importing 
//the jqeury or any string we have the constructor of jqeury
import jqeury from 'jquery'; 
import TestUtils from 'react-addons-test-utils';
// When ever we use JSX we need to import react
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing enviroment to run like a browser with a virtual document in cl JSDom
//window in tghe browser is the global scope so we create similar with global
// this is necesary for jquery and the things it need to run
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jqeury(global.window);


//Build renderComponent helper that should render a given react component

function renderComponent(ComponentClass, props, state){
  const renderedInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  //Returns HTML from renderedInstance and pass it to jequery to create a jq element
  // so then we will be able to use chai-jquery
  return $(ReactDOM.findDOMNode(renderedInstance)); 
}


//buils helper for simulating events

$.fn.simulate=function(eventName,value){
  //Simulate.click , .change 
  
  if(value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]); 
}

// setup chai-jquery for accertions in the virtual document

chaiJquery(chai,chai.util,$);

export { renderComponent, expect };