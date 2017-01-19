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

const SearchBox = (ListItem)=> {
    return observer(class extends Component {
        static propTypes = {
            searchStore: React.PropTypes.object.isRequired
        };

        render() {
            return (
                <MuiThemeProvider>
                    <div>
                        <SearchInput query={this.props.searchStore.query}
                                     onQueryUpdate={value => this.props.searchStore.updateQuery(value)}
                                     onSubmit={() => this.props.searchStore.search()}
                        />
                        <SearchResults ListItem={ListItem} results={this.props.searchStore.results.slice()}/>
                    </div>
                </MuiThemeProvider>
            );
        }
    });
};


export default SearchBox