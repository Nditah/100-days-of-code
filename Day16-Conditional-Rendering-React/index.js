import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginControl from './LoginControl';
import Page from './Page';


ReactDOM.render(
  <React.StrictMode>
    <LoginControl />
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);
