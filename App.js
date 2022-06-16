import React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}>
        <Text style={styles.card_title}>Hello Bebek</Text>
        <Text>Hello</Text>
      <TouchableOpacity  style={styles.card_button_container}>
        <Text style={styles.card_button_container_title} >Melih Dokuzlar</Text>
      </TouchableOpacity>
      </View>
    

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#871165'
  },
  box_1: {
    backgroundColor: '#ff2f73',
    margin: 100,
    marginTop: 30,
    borderWidth: 3,
    padding: 5,
    alignItems: 'center',
    height: 200,
    width: 400,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  card_title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 5
  },
  card_button_container: {
      backgroundColor: 'blue',
      padding: 10,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      flex: 1,
      overflow: 'hidden',
      marginBottom: 0

  },
  card_button_container_title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    }
})

export default App;