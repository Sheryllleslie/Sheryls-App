import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from '../components/MyButton.js';
import { Input, Icon } from '@rneui/themed';


export default function ToDoList() {
  const [item, setItem] = useState("");
    return(
    <>
    <View style={styles.container}>
      <Text style={styles.Bold}>To Do List!</Text>
      <Text>{item}</Text>
      <StatusBar style="auto" />
    </View>
        <Input
      placeholder="Add item"
      leftIcon={{ type: 'font-awesome', name: 'list' }}
      onChangeText={(value) => setItem(value)}
      />
      </>
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