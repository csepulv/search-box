#Search Box

This is part of a medium post, which can be found at at [https://medium.com/@csepulv/latest](https://medium.com/@csepulv/latest)

The Medium tutorial outlines the main refactorings, but doesn't provide the full details for all the  React Native/mobile elements, as the approach mirrors the React/web components. 

For completeness, here are the remainder of the refactorings. (The final results are in this branch as well.)

Create `MobileSearchBox.js`

```
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
```

Now, we'll extract `MobileSearchInput.js`
 
```
import React  from 'react';
import {TextInput} from 'react-native';
const MobileSearchInput = ({query, onSubmit, onQueryUpdate}) => {
return (
        <TextInput
            style={{height: 40, paddingLeft: 8, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => onQueryUpdate(text)}
            value={query}
            returnKeyType={'search'}
            onSubmitEditing={() => onSubmit()}
        />
    );
};
WebSearchInput.propTypes = {
    query: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onQueryUpdate: React.PropTypes.func.isRequired
};
export default MobileSearchInput;
```

and finally, `MobileSearchResults.js`

```import React, {Component}  from 'react';
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
```

That's it.