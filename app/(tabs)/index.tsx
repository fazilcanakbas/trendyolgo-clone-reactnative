import { Image, StyleSheet, Platform ,Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar} from 'expo-status-bar'
import HomeScreen from '@/src/screen/HomeScreen';
import EatScreen from '../../src/screen/FoodSelectionScreen'

const Stack = createStackNavigator();

<StatusBar style="light" backgroundColor="#333333" />

function App() {
 return (
  <EatScreen/>
 )
}
   
export default App