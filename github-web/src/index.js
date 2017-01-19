import React from 'react';
import ReactDOM from 'react-dom';
import WebSearchBox from './WebSearchBox';
import './index.css';

import {ListItem, Divider, Avatar} from 'material-ui'

import GitHub from './github'

const RepoListItem = ({result}) => {
    return (
        <div>
            <ListItem primaryText={result.name} leftAvatar={<Avatar src={result.owner.avatar_url}/>}/>
            <Divider/>
        </div>
    );
};

RepoListItem.propTypes = {
    result: React.PropTypes.object.isRequired
};

const RepoSearchBox = WebSearchBox(RepoListItem);

ReactDOM.render(
    <RepoSearchBox searchStore={new GitHub()}/>,
    document.getElementById('root')
);
