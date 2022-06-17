import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#eee',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width / 2.5,
        marginTop: 20,
        margin: 10,
        borderRadius: 10,
        // marginBottom: 10
    },
    still_title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text_container: {
        // backgroundColor: 'red',
        width: 240,
        // height: 50,
        marginBottom: 10,
    },
    still_price: {
        fontSize: 20,
        color: 'gray'
    },
    still_Stock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    }
  

})