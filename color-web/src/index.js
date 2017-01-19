import React from 'react';
import ReactDOM from 'react-dom';
import WebSearchBox from './WebSearchBox';
import './index.css';

import Colors from './colors'
import ColorListItem from './ColorListItem'

const ColorSearchBox = WebSearchBox(ColorListItem);

ReactDOM.render(
    <ColorSearchBox searchStore={new Colors()}/>,
    document.getElementById('root')
);
