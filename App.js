import Home from './src/screens/homeScreen.js'
import SignOut from './src/screens/SignOut.js'
import AboutUs from './src/screens/AboutUs.js'
import ToDoList from './src/screens/ToDoListScreen.js'
import DailySchedule from './src/screens/DailyScheduleScreen.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            if (route.name === 'To Do List') {
              iconName = focused ? 'list-outline' : 'list-outline';
            }
            if (route.name === 'SignOut') {
              iconName = focused ? 'trail-sign' : 'trail-sign-outline';
            }
            if (route.name === 'Daily Schedule') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SignOut" component={SignOut} />
        <Tab.Screen name="To Do List" component={ToDoList} />
        <Tab.Screen name="Daily Schedule" component={DailySchedule} />

      </Tab.Navigator>

    </NavigationContainer>

  );
}

//        <Tab.Screen name="AboutUs" component={AboutUs} />