import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text
} from 'react-native';

import {observer} from 'mobx-react/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        marginTop: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        flex: 1,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    }
});

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});

export default observer(class SearchView extends Component {

    static propTypes = {
        colors: React.PropTypes.object.isRequired
    };

    renderRow = (rowData, sectionId, rowID) => {
        return (
            <View style={[styles.row, {backgroundColor: rowData.hex}]}>
                <Text style={styles.text}>{rowData.name}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, paddingLeft: 8, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.props.colors.updateQuery(text)}
                    value={this.props.colors.query}
                    returnKeyType={'search'}
                    onSubmitEditing={() => this.props.colors.search()}
                />
                <ListView enableEmptySections={true}
                          dataSource={ dataSource.cloneWithRows(this.props.colors.results.slice())}
                          renderRow={this.renderRow}
                          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                />

            </View>
        );
    }
});

