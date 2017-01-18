import React, {Component} from 'react';
import {List, ListItem, Divider} from 'material-ui'
import {observer} from 'mobx-react';

export default observer(class SearchResults extends Component {
    static propTypes = {
        colors: React.PropTypes.object.isRequired
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
            <List>
                {listItems}
            </List>
        );
    }

});