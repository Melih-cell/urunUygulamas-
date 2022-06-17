import React, { useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import data_json from './src/components/dataJson.json';
import About from './src/components/About';
import SearchBar from './src/components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(data_json);
  const fonks = ({ item }) => <About idx={item}/>
  const separator = () => <View style={Styles.separator}></View>
  const search = (e) => {
    const filterList = data_json.filter(idx => {
      const userSearch = e.toLowerCase();
      const searchTitle = idx.title.toLowerCase();
  
      return searchTitle.indexOf(userSearch) > -1;

    })
    setList(filterList);
  }
  return (
    <View>
      <SearchBar newSearch={search}/>
      <FlatList keyExtractor={(item) => item.id} data={list} renderItem={fonks} ItemSeparatorComponent={separator}></FlatList>
    </View>
  )
}

const Styles = StyleSheet.create({
    separator: {
      borderWidth: 1,
      borderColor: '#EEEEEE'
    }
})

export default App;