import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import BackButton from '../components/BackButton'
import { ScreenType } from '../constants/constant'

const AddNoteScreen = ({onSave, onExit}) => {
  const [addedText, setAddedText] = useState("")

  const handleChange = (val) => {
    setAddedText(val)
  }

  const handleClick = () => {
    if (addedText.trim().length > 0) {
      onSave(addedText)
      onExit(ScreenType.allNote)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Add New Note.</Text>
        <TextInput onChangeText={handleChange} style={styles.input} placeholder="Type your notes here..."></TextInput>
        <Pressable style={styles.button} onPress={handleClick}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    form: {
      backgroundColor: "#f5f5f5",
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "brown",
    },
  
    input: {
      marginVertical: 20,
      width: "100%",
      borderBottomWidth: 2,
      fontSize: 16,
      padding: 10,
    },
  
    button: {
      backgroundColor: "brown",
      borderRadius: 5,
    },
  
    text: {
      color: "white",
      textAlign: "center",
      padding: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
})