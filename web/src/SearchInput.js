import React, {Component} from 'react';
import {TextField} from 'material-ui';

export default class SearchInput extends Component {
    static propTypes = {
        query: React.PropTypes.string.isRequired,
        onSubmit: React.PropTypes.func.isRequired,
        onQueryUpdate: React.PropTypes.func.isRequired
    };

    handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.props.onSubmit();
        }
    };

    render() {
        return (
            <TextField hintText="Search..."
                       floatingLabelFixed={true}
                       fullWidth={true}
                       value={this.props.query}
                       onChange={(event, value) => this.props.onQueryUpdate(value)}
                       onKeyDown={this.handleKeyDown}/>
        )
    }
}