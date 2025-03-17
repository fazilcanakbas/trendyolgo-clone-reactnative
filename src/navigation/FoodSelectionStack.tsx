import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavorilerimScreen from '../screen/FoodSelectionScreenNavigator/FavorilerimScreen';
import SepetimScreen from '../screen/FoodSelectionScreenNavigator/SepetimScreen';
import SiparislerimScreen from '../screen/FoodSelectionScreenNavigator/SiparislerimScreen';
import KampanyalarimScreen from '../screen/FoodSelectionScreenNavigator/KampanyalarimScreen';
import KesfetScreen from '../screen/FoodSelectionScreenNavigator/KesfetScreen';


const Stack = createStackNavigator();


const FoodSelecitonStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="KesfetMain" component={KesfetScreen} />

      <Stack.Screen options={{ headerLeft: () => null, headerTitleAlign:'center',headerStyle: {alignItems:'center',justifyContent:'center',}}} name="Favori Restoranlarım" component={FavorilerimScreen} />

       <Stack.Screen options={{ headerShown: false }} name="SepetimMain" component={SepetimScreen} />

       <Stack.Screen options={{ headerShown: false }} name="SiparislerimMain" component={SiparislerimScreen} />

       <Stack.Screen options={{  headerLeft: () => null, headerTitleAlign:'center' ,headerTitleStyle: {fontSize: 18, }}} name="Kampanyalar & Kuponlar" component={KampanyalarimScreen} />
       
       
    </Stack.Navigator>
  );

  export default FoodSelecitonStack;