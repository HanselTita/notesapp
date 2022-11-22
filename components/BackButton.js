import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenType } from "../constants/constant"

const BackButton = ({onButtonClick}) => {
  return (
    <View style={styles.container}>
      <Icon onPress={()=>onButtonClick(ScreenType.home)} style={styles.button} name="chevron-back-circle" />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  button: {
    margin: 1,
    fontSize: 30,
    fontWeight: "bold",
    color: "brown",
  },
})
