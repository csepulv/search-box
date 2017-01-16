import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Colors from './colors'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App colors={new Colors()} />, div);
});
