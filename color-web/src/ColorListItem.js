import React  from 'react';
import {ListItem, Divider} from 'material-ui'

const ColorListItem = ({result}) => {
    return (
        <div>
            <ListItem primaryText={result.name} style={{backgroundColor: result.hex} }/>
            <Divider/>
        </div>
    );
};

ColorListItem.propTypes = {
    result: React.PropTypes.object.isRequired
};

export default ColorListItem;