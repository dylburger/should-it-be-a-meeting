import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {HashRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import store from './store';

export default () => (
  <Provider store={store}>
    <HashRouter>
      <MainRouter />
    </HashRouter>
  </Provider>
);
