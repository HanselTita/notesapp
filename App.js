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

  //we use content so that we can navigate the screens when pressed.
  let content
  if (screen === ScreenType.addNote) {
    content = <AddNoteScreen />
  } else if (screen === ScreenType.allNote) {
    content = <AllNotesScreen />
  } else if (screen === ScreenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data)
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <BackButton onButtonClick={(data)=>setScreen(data)}/>
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
