import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>MY NOTES APP.</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height:"13%",

        //if we desire different designs for android and ios, we use Platform.OS
        backgroundColor: Platform.OS == "android" ? "purple" : "brown",
        paddingTop: 30,
    },
    headerTitle:{
        color: Platform.OS === "android" ? "white" : "yellow",
        fontSize: 30,
        fontWeight: 'bold',
        padding:10,
        marginTop:10,
    }
})