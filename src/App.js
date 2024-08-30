import React, { useState, useRef, Fragment } from 'react';
import ProblemStmt from './problemStmt/ProblemStmt';
import PersonDetails from './common/PersonDetails';
import { Provider } from 'react-redux';
import {combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import Home from './project/home';

const initialState = {
  count: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "I":
      return {
        ...state, count: state.count + 1
      }
    case "D":
      return {
        ...state, count: state.count - 1
      }
    case "R":
      return {
        ...state, count: 0
      }
    default: {
      return state
    }
  }
}

const store = configureStore({
  reducer
});

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Home />
      </Provider>
    </Fragment>
  );
}

export default App;
