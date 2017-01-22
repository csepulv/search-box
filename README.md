#Search Box

This is part of a medium post, which can be found at at []https://medium.com/@csepulv/latest](https://medium.com/@csepulv/latest)

## Baseline React and React Native apps
### React / web
From a new directory (search-box),

```create-react-app web```

I like the aesthetic of Material UI, so I’ll add that:

```npm install --save material-ui react-tap-event-plugin```

To keep things simple, we’ll search for local content: crayon colors in a JSON file (the source is [here](https://gist.github.com/jjdelc/1868136)). Copy this file to the web project (make a resource sub directory and add the file to it) and replace the contents of `App.js` with the contents
```
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField, List, ListItem, Divider} from 'material-ui'
import crayola from '../resources/crayola.json'
// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {colors: [], query: ''};
    }
search = () => {
        const results = crayola.filter(color => color.name.toLowerCase().includes(this.state.query.toLowerCase()));
        this.setState({colors: results});
    };
handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.search();
        }
    };
    handleQueryChange = (event, value) => {
        this.setState({query: value});
    };
render() {
        const listItems = this.state.colors.map((color, index) => {
            return (
                <div>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider/>
                </div>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    <TextField hintText="Search..."
                               floatingLabelFixed={true}
                               fullWidth={true}
                               value={this.state.query}
                               onChange={this.handleQueryChange}
                               onKeyDown={this.handleKeyDown}/>
                    <List>
                        {listItems}
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;
```

#### Managing State: Adding Mobx
Managing state and keeping all the views and dependents synchronized starts as an annoyance and becomes painful as the application’s complexity grows. While [Redux](http://redux.js.org/) is a popular option, I think [Mobx](http://mobx.js.org) is easier to integrate and will work well for this example.

MobX is a simple state management library created by [Michel Weststrate](https://github.com/mweststrate). Using either ES7 [decorators](https://github.com/wycats/javascript-decorators), or [function wrappers](https://mobx.js.org/best/syntax.html) (ES5/ES6), dependents ([observers](https://mobx.js.org/refguide/observer-component.html)) automatically receive updates to a state model ([observable](https://mobx.js.org/refguide/observable.html)).

To add,

```npm install --save mobx mobx-react```

We’ll pull the search code from `App.js`, and place it in a new file, `colors.js`, and add the MobX bits (using ES6 syntax).

```
//colors.js
    import {extendObservable, runInAction} from 'mobx';
    import crayola from '../resources/crayola.json'
    export default class Colors {
        constructor() {
            extendObservable(this, {
                results: [],
                query: ''
            });
        }
    search() {
            runInAction(() => {
                this.results = crayola.filter(color => color.name.toLowerCase().includes(this.query.toLowerCase()));
            });
        }
    updateQuery(value) {
            runInAction(() => this.query = value);
        }
    }
  ```

And we’ll update `App.js`, passing it the new `Colors` object

```
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TextField, List, ListItem, Divider} from 'material-ui'
import {observer} from 'mobx-react';
// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export default observer(class App extends Component {
    static propTypes = {
        colors: React.PropTypes.object.isRequired
    };
handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            this.props.colors.search();
        }
    };
    handleQueryChange = (event, value) => {
        this.props.colors.updateQuery(value);
    };
render() {
        const listItems = this.props.colors.results.map((color, index) => {
            return (
                <div key={`color-div-${index}`}>
                    <ListItem key={`color-${index}`} primaryText={color.name} style={{backgroundColor: color.hex} }/>
                    <Divider key={`divider-${index}`}/>
                </div>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    <TextField hintText="Search..."
                               floatingLabelFixed={true}
                               fullWidth={true}
                               value={this.props.colors.query}
                               onChange={this.handleQueryChange}
                               onKeyDown={this.handleKeyDown}/>
                    <List>
                        {listItems}
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
});
```

Finally, we need to update `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Colors from './colors';
ReactDOM.render(
  <App colors={new Colors()}/>,
  document.getElementById('root')
);  
```

```npm start```

Here's a  running [demo](https://colors-search-box.firebaseapp.com).

### React Native / mobile
    
In the root directory (search-box),

```react-native init SearchBoxMobile```

(I renamed the new SearchWebMobile directory to mobile, simply to have two subdirectories, web and mobile.)

Copy `crayola.json` and `colors.js` to the mobile project. As before, we’ll use MobX. 

```npm install --save mobx mobx-react```

Create a new file, `SearchView.js` and enter the following code,

```
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text
} from 'react-native';
//slightly different import for mobile/react native
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
```

and change contents of `index.ios.js` to (can do similar for `index.android.js`)

```
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
```
You can run the simulator with `react-native run-ios`

        