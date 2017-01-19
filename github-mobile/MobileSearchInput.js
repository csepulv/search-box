import React  from 'react';
import {TextInput} from 'react-native';

const MobileSearchInput = ({query, onSubmit, onQueryUpdate}) => {

    return (
        <TextInput
            style={{height: 40, paddingLeft: 8, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => onQueryUpdate(text)}
            value={query}
            returnKeyType={'search'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onSubmitEditing={() => onSubmit()}
        />
    );

};

MobileSearchInput.propTypes = {
    query: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onQueryUpdate: React.PropTypes.func.isRequired
};

export default MobileSearchInput;