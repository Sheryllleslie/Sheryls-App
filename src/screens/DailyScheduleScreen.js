import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from '../components/MyButton.js';


export default function DailySchedule() {
    return(
    <View style={styles.container}>
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