import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import MainLayout from './Layout/MainLayout';
import './reset.css';

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById('root')
);
