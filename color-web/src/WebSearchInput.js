import React  from 'react';
import {TextField} from 'material-ui';

const WebSearchInput = ({query, onSubmit, onQueryUpdate}) => {
    const handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            onSubmit();
        }
    };

    return (
        <TextField hintText="Search..."
                   floatingLabelFixed={true}
                   fullWidth={true}
                   value={query}
                   onChange={(event, value) => onQueryUpdate(value)}
                   onKeyDown={handleKeyDown}/>
    );

};

WebSearchInput.propTypes = {
    query: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onQueryUpdate: React.PropTypes.func.isRequired
};

export default WebSearchInput;