import React  from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text
} from 'react-native';

import MobileSearchBox from './MobileSearchBox';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        flex: 1,
    }
});

const ColorListItem = ({result})=>{
    return (
        <View style={[styles.row, {backgroundColor: result.hex}]}>
            <Text style={styles.text}>{result.name}</Text>
        </View>
    )
};
const ColorSearchBox = MobileSearchBox(ColorListItem);
export default ColorSearchBox;