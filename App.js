import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import BackButton from "./components/BackButton"
import Header from "./components/Header"
import { ScreenType } from "./constants/constant"
import AddNoteScreen from "./screens/AddNoteScreen"
import AllNotesScreen from "./screens/AllNotesScreen"
import HomeScreen from "./screens/HomeScreen"

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home)
  const [notes, setnotes] = useState([])

  const updateScreen = (data) => {
    setScreen(data)
  }

  //we use content so that we can navigate the screens when pressed.
  let content
  if (screen === ScreenType.addNote) {
    content = <AddNoteScreen onExit={updateScreen} onSave={(data) => setnotes([...notes, { id: Date.now(), note: data }])} />
  } else if (screen === ScreenType.allNote) {
    content = <AllNotesScreen notes={notes} />
  } else if (screen === ScreenType.home) {
    content = <HomeScreen onExit={updateScreen} />
  }
  console.log(notes)
  return (
    <View style={styles.container}>
      <Header />
     { screen !== ScreenType.home && ( <BackButton onButtonClick={updateScreen} />)}
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
