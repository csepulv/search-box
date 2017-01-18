import React, {Component} from 'react';
import {List, ListItem, Divider} from 'material-ui'

export default class SearchResults extends Component {
    static propTypes = {
        colors: React.PropTypes.array.isRequired
    };

    render() {
        const listItems = this.props.colors.map((color, index) => {
            return (
                <div key={`color-div-${index}`}>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider key={`divider-${index}`}/>
                </div>
            );
        });
        return (
            <List>
                {listItems}
            </List>
        );
    }

}