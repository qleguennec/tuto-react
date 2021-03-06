import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './app'

import './index.css';

import store from './redux/store'

ReactDOM.render(
  (<Provider store={store}>
    <App title="Hello" />
  </Provider>)
  , document.getElementById('root'));
