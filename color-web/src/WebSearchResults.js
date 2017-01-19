import React, {Component}  from 'react';
import {List} from 'material-ui'

const WebSearchResults = ListItem => {
    return class extends Component {
        static propTypes = {
            results: React.PropTypes.array.isRequired
        };

        render() {
            const listItems = this.props.results.map((result, index) => {
                return (
                    <ListItem key={`result-${index}`} result={result}/>
                );
            });
            return (
                <List>
                    {listItems}
                </List>
            );
        };
    };
};

export default  WebSearchResults;