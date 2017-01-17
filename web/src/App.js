import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField, List, ListItem, Divider} from 'material-ui'

import {observer} from 'mobx-react';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default observer(class App extends Component {
    static propTypes = {
        colors: React.PropTypes.object.isRequired
    };

    handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.props.colors.search();
        }
    };

    render() {
        const listItems = this.props.colors.results.map((color, index) => {
            return (
                <div key={`color-div-${index}`}>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider key={`divider-${index}`}/>
                </div>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    <TextField hintText="Search..."
                               floatingLabelFixed={true}
                               fullWidth={true}
                               value={this.props.colors.query}
                               onChange={(event, value) => this.props.colors.updateQuery(value)}
                               onKeyDown={this.handleKeyDown}/>
                    <List>
                        {listItems}
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
});

