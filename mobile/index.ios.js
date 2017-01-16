/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import SearchView from './SearchView'

import Colors from './colors';
const colors = new Colors();

export default class SearchBoxMobile extends Component {

    render() {
        return (
            <SearchView colors={colors}/>
        );
    }
}
AppRegistry.registerComponent('SearchBoxMobile', () => SearchBoxMobile);
