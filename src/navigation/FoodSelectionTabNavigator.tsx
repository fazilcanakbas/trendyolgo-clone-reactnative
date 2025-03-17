import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import KesfetScreen from '../screen/FoodSelectionScreenNavigator/KesfetScreen';
import FavorilerimScreen from '../screen/FoodSelectionScreenNavigator/FavorilerimScreen';
import SepetimScreen from '../screen/FoodSelectionScreenNavigator/SepetimScreen';
import SiparislerimScreen from '../screen/FoodSelectionScreenNavigator/SiparislerimScreen';
import KampanyalarimScreen from '../screen/FoodSelectionScreenNavigator/KampanyalarimScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FoodSelectionScreen from '../screen/FoodSelectionScreen';

const { width, height } = Dimensions.get('window');
const FoodTab = createBottomTabNavigator();
const Stack = createStackNavigator();


const KesfetStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="KesfetMain" component={KesfetScreen} />
  </Stack.Navigator>
);

const FavorilerimStack = () => (
  <Stack.Navigator screenOptions={{ headerLeft: () => null, headerTitleAlign:'center' }}>
    <Stack.Screen options={{headerStyle: {alignItems:'center',justifyContent:'center',}}} name="Favori Restoranlarım" component={FavorilerimScreen} />
  </Stack.Navigator>
);

const SepetimStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SepetimMain" component={SepetimScreen} />
  </Stack.Navigator>
);

const SiparislerimStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SiparislerimMain" component={SiparislerimScreen} />
  </Stack.Navigator>
);

const KampanyalarStack = () => (
  <Stack.Navigator screenOptions={{  headerLeft: () => null, headerTitleAlign:'center' ,headerTitleStyle: {fontSize: 18, }}}>
    <Stack.Screen name="Kampanyalar & Kuponlar" component={KampanyalarimScreen} />
  </Stack.Navigator>
);

export default function FoodTabNavigator() {
  return (
    <FoodTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f87d1d',
        tabBarInactiveTintColor: '#737373',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: height * 0.085,
          paddingTop: 5,
        },
        tabBarItemStyle: { maxWidth: 80 }
      }}
    >
      <FoodTab.Screen 
        name="Keşfet" 
        component={KesfetStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" color={color} size={24} />
          ),
        }}
      />
      <FoodTab.Screen 
        name="Favorilerim" 
        component={FavorilerimStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" color={color} size={24} />
          ),
        }}
      />
      <FoodTab.Screen 
        name="Sepetim" 
        component={SepetimStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag" color={color} size={24} />
          ),
        }}
      />
      <FoodTab.Screen 
        name="Siparişlerim" 
        component={SiparislerimStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color={color} />
          ),
        }}
      />
      <FoodTab.Screen 
        name="Kampanyalar" 
        component={KampanyalarStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gift" color={color} size={24} />
          ),
        }}
      />
    </FoodTab.Navigator>
  );
}