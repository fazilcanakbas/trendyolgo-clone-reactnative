import React from 'react';
import HomeScreen from '../../src/screen/HomeScreen';
import FoodSelectionScreen from '../../src/screen/FoodSelectionScreen';
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    
    <NavigationContainer>
      
      
     
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#f87d1d', // Aktif metin rengi
          tabBarInactiveTintColor: '#737373', // Pasif metin rengi
        }}
      >
        
        <Tab.Screen
          name="Anasayfa"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={24}
                color={focused ? '#f87d1d' : '#737373'} // Aktif/pasif ikon rengi
              />
            ),
            title: 'Anasayfa',
          }}
        />
        <Tab.Screen
          name="Siparişlerim"
          component={FoodSelectionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="receipt"
                size={24}
                color={focused ? '#f87d1d' : '#737373'} // Aktif/pasif ikon rengi
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hesabım"
          component={View}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="user-large"
                size={24}
                color={focused ? '#f87d1d' : '#737373'} // Aktif/pasif ikon rengi
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
