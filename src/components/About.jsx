import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './About.style';
const About = ({ idx }) => {
  return (
    <View style={Styles.container}>        
        <Image style={Styles.image} source={{uri: idx.imageUrl}} />
        <View style={Styles.header_container}>
                <Text style={Styles.title}>{idx.title}</Text>
        <View style={Styles.part_container}>
            <View style={Styles.body_container}>
                <Text>{idx.artist}</Text>
                <Text style={Styles.year}>{idx.year}</Text>
            </View>
            {!idx.isSoldOut && <View style={Styles.isSoldOut_container}>
                <Text style={Styles.isSoldOut}>TÜKENDİ</Text>
            </View>
            }
        </View>
            <Text style={Styles.album}>Album: {idx.album}</Text>
        </View>
    </View>
  )
}

export default About