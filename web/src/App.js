import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField, List, ListItem, Divider} from 'material-ui'

import crayola from '../resources/crayola.json'

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {colors: [], query: ''};
    }

    search = () => {
        const results = crayola.filter(color => color.name.toLowerCase().includes(this.state.query.toLowerCase()));
        this.setState({colors: results});
    };

    handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.search();
        }
    };
    handleQueryChange = (event, value) => {
        this.setState({query: value});
    };

    render() {
        const listItems = this.state.colors.map((color, index) => {
            return (
                <div>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider/>
                </div>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    <TextField hintText="Search..."
                               floatingLabelFixed={true}
                               fullWidth={true}
                               value={this.state.query}
                               onChange={this.handleQueryChange}
                               onKeyDown={this.handleKeyDown}/>
                    <List>
                        {listItems}
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
