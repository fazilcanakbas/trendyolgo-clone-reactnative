import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import RestaurantProductScreen from "@/src/screen/RestaurantProductScreen";
import FoodSelectionTabNavigator from "./FoodSelectionTabNavigator";
import {View} from 'react-native'
import RestoranScreen from "@/src/screen/RestoranScreen";
import AccountScreen from "@/src/screen/AccountScreen";
import UsersInfoScreen from "@/src/screen/AccountScreens/UsersInfoScreen";
import FoodTabNavigator from "./FoodSelectionTabNavigator";
import RestoranScreenNavigator from "./RestoranScreenNavigator";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>

    <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
    <Stack.Screen 
      name="FoodSelectionScreen" 
      component={FoodTabNavigator} 
      options={{ headerShown: false, headerLeft: () => null }} 
    />

    
    <Stack.Screen name="MarketScreen" component={View} />
    <Stack.Screen name="WaterScreen" component={View} />
    <Stack.Screen options={{ headerShown: false }} name="RestoranScreen" component={RestoranScreen} />
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen options={{ headerShown: false }} name="RestaurantProductScreen" component={RestaurantProductScreen} />

  </Stack.Navigator>

  );
}
