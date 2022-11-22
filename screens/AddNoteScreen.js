import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AddNote from '../components/AddNote'
import BackButton from '../components/BackButton'
import { ScreenType } from '../constants/constant'

const AddNoteScreen = () => {

    const [screen, setScreen] = useState(ScreenType.addNote)
  return (
    <View style={styles.container}>
     <AddNote/>
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})