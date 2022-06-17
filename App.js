import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Home from './src/components/Home';
import data_json from './src/components/Data.json';

const App = () => {
  const fonks = ({ item }) => <Home dat={item}/>
  const keyEX = (item) => item.id.toString();

  return(
    <View style={styles.container}>
      <View style={styles.still_container}>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput placeholder='    Ara...' style={styles.input}></TextInput>
      </View>
      <FlatList numColumns={2} data={data_json} renderItem={fonks} keyExtractor={keyEX}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 34,
  },
  still_container: {
    // alignItems: 'center'
    margin: 15
  },
  input: {
    width: 575,
    height: 30,
    backgroundColor: '#eee',
    borderRadius: 10,
    
  }
})



export default App;