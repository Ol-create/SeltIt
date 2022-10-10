import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
 const handlePress =()=> {
  return(
    console.log("Text Clicked")
  )
 }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Open up App.js to start working on your app! reallly really long text</Text>
     <Image 
     blurRadius={30}
     source={require("./assets/icon.png")}
     style={styles.styleImage}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    width: 200,
    height: 200,
  }
});
