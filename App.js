import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import background from './assets/pexels-todd-trapani-1420440.jpg'

export default function App() {

  const[isEnabled, setIsEnabled] = useState(false)
  const[text, setText] = useState("")

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        blurRadius="10"
        resizeMode="cover">
      </ImageBackground>
      <TextInput
        placeholder="Input text here"
        multiline
        numberOfLines={2}
        value={text}
        style={styles.textInput}
        onChangeText={(value)=>setText(value)}
        maxLength={50}
        ></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, background: {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  }, textInput: {
    borderWidth:1,
    borderColor:"orange",
    width:'75%',
    height:300,
    maxHeight:450,
    alignItems:"top",
    textAlignVertical:"top",
    maring:5,
    padding:5,
  }
});
