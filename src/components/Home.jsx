import { Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import styles from './Home.style';

const Home = ({ dat }) => {
    const [idx, setIdx] = useState(dat.inStock)
  return (
    <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: dat.imgURL}}></Image>
            <View style={styles.text_container}>
                <Text style={styles.still_title}>{dat.title}</Text>
                <Text style={styles.still_price}>{dat.price}</Text>
            {!idx && <Text style={styles.still_Stock}>STOKTA YOK{dat.inStock}</Text>}
            </View>
    </TouchableOpacity>
  )
}

export default Home;