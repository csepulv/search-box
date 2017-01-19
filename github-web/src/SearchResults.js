import React  from 'react';
import {List} from 'material-ui'

const SearchResults = ({ListItem, results}) => {
    const listItems = results.map((result, index) => {
        return (
            <ListItem key={`result-div-${index}`} result={result} />
        );
    });
    return (
        <List>
            {listItems}
        </List>
    );
};

SearchResults.propTypes = {
    ListItem: React.PropTypes.func.isRequired,
    results: React.PropTypes.array.isRequired
};

export default  SearchResults;