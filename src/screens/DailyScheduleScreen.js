import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from '../components/MyButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUsername,setPassword} from '../redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect} from 'react';


export default function DailySchedule() {

    const {username, password} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();

//    const [username,setUsername]=useState('')
//    const [password,setPassword]=useState('')

    useEffect(()=>{
        getData();
    },[])

    const getData = () =>{
        try{
            AsyncStorage.getItem('UserName')
            .then(value =>{
            if (value != null){
            let user = JSON.parse(value);
            dispatch(setUsername(username));
            dispatch(setPassword(password));
            }
            }
            )
        }
        catch(error){
        console.log(error)
        }
    }

    const Logout = async() => {
        try{
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch(error){
        console.log(error);
        }
    }
    return(
    <View style={styles.container}>
    <View style={{
                position: 'absolute',
                right: 5,
                top: 5,
          }}>
      <Text> Username: {username}</Text>
      </View>
      <Text style={styles.Bold}>Monday</Text>
      <Text style={styles.Bold}>Tuesday</Text>
      <Text style={styles.Bold}>Wednesday</Text>
      <Text style={styles.Bold}>Thursday</Text>
      <Text style={styles.Bold}>Friday</Text>
      <Text style={styles.Bold}>Saturday</Text>
      <Text style={styles.Bold}>Sunday</Text>

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