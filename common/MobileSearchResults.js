import React, {Component}  from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text
} from 'react-native';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    }
});

const MobileSearchResults = ListItem => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
        }

        static propTypes = {
            results: React.PropTypes.array.isRequired
        };

        renderRow = (rowData, sectionId, rowID) => {
            return (
                <ListItem result={rowData}/>
            );
        };

        render() {
            return (
                <ListView enableEmptySections={true}
                          dataSource={ this.dataSource.cloneWithRows(this.props.results)}
                          renderRow={this.renderRow}
                          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                />
            );
        }
    };
};

export default  MobileSearchResults;