import React  from 'react';
import {List, ListItem, Divider} from 'material-ui'

const SearchResults = ({results}) => {
    const listItems = results.map((result, index) => {
        return (
            <div key={`result-div-${index}`}>
                <ListItem key={`result-${index}`} primaryText={result.name} style={{backgroundColor: result.hex} }/>
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
    results: React.PropTypes.array.isRequired
};

export default  SearchResults;