import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import devTools from 'remote-redux-devtools';

//
import rootReducer from './rootReducer'

/*
*
* Middlewares
*
*/
const logger = createLogger()

export default function configureStore ({ initialState = {}, history }) {

  // const routerMiddleware = syncHistory(history)

  let middlewares = [

    applyMiddleware(
      thunk, logger
    ),

    devTools({
      // name: Platform.OS,
      name: 'iOS',
      hostname: 'localhost',
      port: 5678
    })
  ]

  const enhancer = compose(
    ...middlewares
  );

  //
  return createStore(rootReducer, initialState, enhancer);
}
