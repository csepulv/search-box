import React  from 'react';
import {List, ListItem, Divider} from 'material-ui'

const SearchResults = ({colors}) => {
    const listItems = colors.map((color, index) => {
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
};

SearchResults.propTypes = {
    colors: React.PropTypes.array.isRequired
};

export default  SearchResults;