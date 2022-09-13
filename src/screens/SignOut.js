import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import _ from 'lodash';


const SignOut = () => {
  const [animals, setAnimals] = useState([
    { type: "Lion" },
    { type: "Rabbit" },
    { type: "Wolf" }
  ]);

  const handThis = () =>{
    const element = _.sample(animals);
    console.log(element, "element")
    return element
  }

  return (

    <View style={styles.container}>
      <View>
      {animals.map((animal) => (
        <Text>{animal.type}</Text>
      ))}
      </View>


      <TouchableOpacity style={styles.button} onPress={() => setAnimals([...animals, { type: "Sparrow" }])}>
          <Text>animalsAdd</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setAnimals([handThis()])}>
          <Text>random</Text>
      </TouchableOpacity>

      <Text>SIGNOUT!</Text>
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
    title: {
      color: 'green',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#B28765",
        padding: 10
      },
  });


export default SignOut;