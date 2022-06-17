import React from 'react';
import { TextInput, View } from "react-native";
import Styles from './SearchBar.style';

const SearchBar = (props) => {

    return(
        <View style={Styles.container}>
            <TextInput placeholder='  Ara...' onChangeText={props.newSearch}></TextInput>
        </View>
    )
}

export default SearchBar;