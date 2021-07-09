import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import mainReducer from './store/reducers/mainReducer'
import {Provider} from 'react-redux';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


