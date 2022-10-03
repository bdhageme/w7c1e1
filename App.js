import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground>
        source={}
        style={styles.background}
        blurRadius="10"
        resizeMode="cover"
      </ImageBackground>
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
  },background: {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  }
});
