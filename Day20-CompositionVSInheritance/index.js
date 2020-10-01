import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeDialog from './WelcomeDialog';
import SignUpDialog from './SignUpDialog';

ReactDOM.render(
  <React.StrictMode>
    <WelcomeDialog />
    <SignUpDialog />
  </React.StrictMode>,
  document.getElementById('root')
);
