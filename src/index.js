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

// const store = createStore(mainReducer, applyMiddleware(thunk));
const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);