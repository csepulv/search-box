import React, {Component} from 'react';
import {TextField} from 'material-ui';
import {observer} from 'mobx-react';

export default observer(class SearchInput extends Component {
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
        return (
            <TextField hintText="Search..."
                       floatingLabelFixed={true}
                       fullWidth={true}
                       value={this.props.colors.query}
                       onChange={(event, value) => this.props.colors.updateQuery(value)}
                       onKeyDown={this.handleKeyDown}/>
        )
    }
});