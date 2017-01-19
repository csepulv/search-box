/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import Colors from './colors';

import ColorMobileSearchBox from './ColorMobileSearchBox';

export default class App extends Component {

    render() {
        return (
            <ColorMobileSearchBox searchStore={new Colors()}/>
        );
    }
}
AppRegistry.registerComponent('SearchBoxMobile', () => App);
