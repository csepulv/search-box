import React  from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text,
    Image
} from 'react-native';

import MobileSearchBox from './MobileSearchBox';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    thumb: {
        width: 48,
        height: 48,
    },
    text: {
        flex: 1,
    }
});

const RepoListItem = ({result})=>{
    return (
        <View style={[styles.row]}>
            <Image style={styles.thumb} source={{url:result.owner.avatar_url}} />
            <Text style={styles.text}>{result.name}</Text>
        </View>
    )
};
const GitHubSearchBox = MobileSearchBox(RepoListItem);
export default GitHubSearchBox;