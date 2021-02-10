import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import GlobalFonts from './app/fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
