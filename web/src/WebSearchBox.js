import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import WebSearchInput from './WebSearchInput';
import WebSearchResults from './WebSearchResults';

import SearchBox from './SearchBox'

const WebSearchFrame = ({children}) => {
    return (
        <MuiThemeProvider>
            <div>
                {children}
            </div>
        </MuiThemeProvider>
    );
};

const WebSearchBox = ListItem => SearchBox(WebSearchFrame, WebSearchInput, WebSearchResults(ListItem));

export default WebSearchBox