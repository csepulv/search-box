import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {observer} from 'mobx-react';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default observer(class App extends Component {
    static propTypes = {
        colors: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SearchInput query={this.props.colors.query}
                                 onQueryUpdate={value => this.props.colors.updateQuery(value)}
                                 onSubmit={() => this.props.colors.search()}
                    />
                    <SearchResults colors={this.props.colors.results.slice()}/>
                </div>
            </MuiThemeProvider>
        );
    }
});

