import React from 'react';
import ReactDOM from 'react-dom';
import App from './SearchBox';
import './index.css';

import Colors from './colors'

ReactDOM.render(
  <App searchStore={new Colors()}/>,
  document.getElementById('root')
);
