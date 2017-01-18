import 'react-native-mock/mock';

import 'react-native';
import React from 'react';

jest.mock('mobx-react/native', () => require('mobx-react/custom'));



import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text
} from 'react-native';

import {shallow} from 'enzyme';

import Colors from '../colors'
import SearchView from '../SearchView';

it('shows search results', () => {
    const wrapper = shallow(<SearchView colors={new Colors()}/>);
    const textField = wrapper.find(TextInput);
    textField.props().onChangeText('Blue G');
    textField.props().onSubmitEditing();

    const colorList = wrapper.find(ListView);
    //A bit of a hack/brittle -- reaching into the bowels of the dataSource
    //a better approach would be to separate into components, test separately

    expect(colorList.props().dataSource._dataBlob.s1.length).toEqual(2);
    expect(colorList.props().dataSource._dataBlob.s1[0].name).toEqual('Blue Gray');
    expect(colorList.props().dataSource._dataBlob.s1[1].name).toEqual('Blue Green');
});
