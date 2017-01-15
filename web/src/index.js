import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Colors from './colors'

ReactDOM.render(
  <App colors={new Colors()}/>,
  document.getElementById('root')
);
