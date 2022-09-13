import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from '../components/MyButton.js';


export default function Home() {
    return(
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Hello</Text>
      <Text style={styles.Bold}>My name is Sheryl</Text>
      <Text style={{ color: 'white'}}>Welcome to my app</Text>
      <Text style={{ color: 'white'}}>I hope you enjoy it!</Text>
      <AppButton ButtonText ="Press this"/>
      <StatusBar style="auto" />
    </View>
)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DAC7',
    alignItems: 'center',
    justifyContent: 'center',
  },
    Bold: {
  fontWeight: 'bold',
  color: 'white'
  },
});