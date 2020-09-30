import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
