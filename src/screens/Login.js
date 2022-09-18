import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import AppButton from '../components/MyButton.js';
import { Input, Icon } from '@rneui/themed';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUsername,setPassword} from '../redux/actions.js';



export default function Login({navigation}) {
    const {username, password} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();


//    const [username,setUsername]= useState('')
//    const [password,SetPassword]= useState('')

    useEffect(()=>{
        getData();
    },[])

    const getData = () =>{
        try{
            AsyncStorage.getItem('UserData')
            .then(value =>{
            if (value != null){
                navigation.navigate('Home');
            }
            }
            )
        }
        catch(error){
        console.log(error)
        }
    }

    const setData = async () => {
    if (username.length==0 || password.length ==0){
    Alert.alert('Please enter your username.')
    }
    else{
        try{
        dispatch(setUsername(username));
        dispatch(setPassword(password));
//        var user:{
//        Username:username,
//        Password:password}
//        await AsyncStorage.setItem('UserData',JSON.stringify(user));
        navigation.navigate('Home');
        }
        catch(error){
        console.log(error)
        }
        }
    }

    return(
    <View style={styles.container}>
        <Input
            placeholder="Username"
            onChangeText={(value) => dispatch(setUsername(value))}
        />
        <Input
            placeholder="Password"
            onChangeText={(value) => dispatch(setPassword(value))}
        />
        <Button title='Login' onPress={setData} />
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
  color: 'white',
  fontSize: 50
  },
});



