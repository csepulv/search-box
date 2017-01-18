import React from 'react';
import App from './App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {TextField, ListItem} from 'material-ui'

import {mount} from 'enzyme';

import Colors from './colors'

const muiTheme = getMuiTheme();
const mountWithContext = (node) => mount(node, {context: {muiTheme}});

it('shows search results', () => {
    const wrapper = mountWithContext(<App colors={new Colors()} />);
    const textField = wrapper.find(TextField);
    textField.props().onChange(null, 'Blue G');
    textField.props().onKeyDown({
        keyCode: 13, preventDefault: () => {
        }
    });

    const colorItems = wrapper.find(ListItem);
    expect(colorItems.length).toEqual(2);
    expect(colorItems.nodes[0].props.primaryText).toEqual('Blue Gray');
    expect(colorItems.nodes[1].props.primaryText).toEqual('Blue Green');
});
