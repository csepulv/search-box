import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import {observer} from 'mobx-react/native';

import MobileSearchInput from './MobileSearchInput';
import MobileSearchResults from './MobileSearchResults';

import SearchBox from './SearchBox'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        marginTop: 25
    }
});

const MobileSearchFrame = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const MobileSearchBox = ListItem => observer(SearchBox(MobileSearchFrame, MobileSearchInput, MobileSearchResults(ListItem)));

export default MobileSearchBox