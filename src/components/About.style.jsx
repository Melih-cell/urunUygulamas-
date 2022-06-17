import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    header_container: {
        padding: 12,
        flex: 1,
        justifyContent: 'center',
    },
    part_container: {
        flexDirection: 'row',
    },
    body_container: {
        flexDirection: 'row',
        flex: 1
    },
    year: {
        marginLeft: 12,
        fontWeight: 'bold'
    },
    isSoldOut_container: {
        borderWidth: 1,
        padding: 5,
        borderColor: 'red',
        borderRadius: 5
    },
    isSoldOut: {
        color: 'red'
    },
    album: {
        fontStyle: 'italic',
        color: 'gray',
        fontWeight: 'bold',
        marginTop: 9,
        fontSize: 12
    }
})