//import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import AppButton from '../components/MyButton'
//
//class AboutUs extends React.Component {
//    constructor(){
//        super()
//        this.state = {val:0,names:[]}
//        this.update = this.update.bind(this)
//    }
//    update(){
//       this.setState({val: this.state.val + 1})
//    }
//
//    componentDidMount(){
//    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
//    .then(res => res.json())
//    .then(data ==> console.log(data))
//    .then(json => {
//        this.setState({names: [json]});
//    });
//        console.log("the AboutUs component now succesfully exists")
//
//    }
//
//    componentDidUpdate(){
//        console.log(`The new Value is : ${this.state.val}`)
//    }
//
//
//
//
//    render (){
//        return (  <View style={styles.container}>
//            <Text>ABOUTUS!</Text>
//            <Text style={styles.title}>Value is : {this.state.val}</Text>
//            <TouchableOpacity style={styles.button} onPress={this.update}>
//                <Text>Press Here</Text>
//            </TouchableOpacity>
//            <StatusBar style="auto" />
//          </View>)
//    }
//}
//
//const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: 'yellow',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    title: {
//      color: 'green',
//      fontWeight: 'bold',
//      textDecorationLine: 'underline',
//      fontSize: 20
//    },
//    button: {
//        alignItems: "center",
//        backgroundColor: "#DDDDDD",
//        padding: 10
//      },
//  });
//
//
//  export default AboutUs;