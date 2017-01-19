/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import GitHub from './github';

import GitHubMobileSearchBox from './GitHubMobileSearchBox';

export default class App extends Component {

    render() {
        return (
            <GitHubMobileSearchBox searchStore={new GitHub()}/>
        );
    }
}
AppRegistry.registerComponent('GitHubMobile', () => App);
