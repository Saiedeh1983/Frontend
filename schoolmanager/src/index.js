import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainMenu from './Component/Header/MainMenu';

ReactDOM.render(
  <React.StrictMode>
  <MainMenu />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

