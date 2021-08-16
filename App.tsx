import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AirportProvider } from './context/AirportsContext';
const App = () => {

const [text, setText] = useState('');

  return (
    
<View>
<AirportProvider>
  <TextInput onChangeText={text => setText(text)} defaultValue={text} placeholder="search"/>
  <Text>
    {
      text.split(' ').map((word)=> word &&'result').join(' ')
    }
  </Text>
  </AirportProvider>
</View>

  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
