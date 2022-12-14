import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenType } from "../constants/constant"

const HomeScreen = ({onExit}) => {
  return (
    <View style={styles.container}>

      {/* To be able to press and navigate to the wanted screen, use Pressable, OnPress, onExit and then function
        ScreenType.'wanted screen' comes from constant.js from constant folder*/}

      <Pressable onPress={()=>onExit(ScreenType.addNote)}> 
        <View style={styles.itemButton}>
          <Text style={styles.title}>ADD NEW NOTES</Text>
          <Icon style={styles.icon} name="arrow-forward-circle" />
        </View>
      </Pressable>
      <Pressable onPress={()=>onExit(ScreenType.allNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>VIEW ALL NOTES</Text>
          <Icon style={styles.icon} name="arrow-forward-circle" />
        </View>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },

  itemButton: {
    width: Dimensions.get("window").width - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,

    //Shadow for android
    elevation: 10,

    //for IOS
    shadowOffset: { width: 2, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Platform.OS === "android" ? "blue" : "brown",
  },

  icon: {
    fontSize: 30,
    paddingTop: 20,
    color:"brown"
  },
})
