import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        marginTop: 25
    }
});

import MobileSearchInput from './MobileSearchInput';
import MobileSearchResults from './MobileSearchResults';

import SearchBox from './SearchBox'

const MobileSearchFrame = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const MobileSearchBox = ListItem => SearchBox(MobileSearchFrame, MobileSearchInput, MobileSearchResults(ListItem));

export default MobileSearchBox