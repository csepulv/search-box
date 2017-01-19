import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import './index.css';

import Colors from './colors'
import ColorListItem from './ColorListItem'

const ColorSearchBox = SearchBox(ColorListItem);

ReactDOM.render(
    <ColorSearchBox searchStore={new Colors()}/>,
    document.getElementById('root')
);
