import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, Text,Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/screen/HomeScreen';
import FoodSelectionScreen from '../../src/screen/FoodSelectionScreen';
import RestoranScreen from '@/src/screen/RestoranScreen';

const { width,height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack yapısının tanımlanması
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FoodSelectionScreen" component={FoodSelectionScreen} options={{headerShown:false,headerLeft: () => null }}/>
      <Stack.Screen name="MarketScreen" component={View} />

      <Stack.Screen name="RestoranScreen" component={RestoranScreen} />
      
    </Stack.Navigator>
  );
}

// Ana navigasyon yapısı
export default function Index() {
  const [loading, setLoading] = useState<string | null>(null);


    const [error, setError] = useState<string | null>(null);


    if (loading) {
      return <View style={{ width:width*width,height:height*height,backgroundColor:'#f27a1b'}}> <Text style={{
        
      }}></Text></View>;}if (error) {
            return <Text>{error}</Text>;
          }
      

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#f87d1d', // Aktif metin rengi
          tabBarInactiveTintColor: '#737373', // Pasif metin rengi
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeStack}  // Stack'ı tab ekranı olarak tanımladık
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={24}
                color={focused ? '#f87d1d' : '#737373'}
              />
            ),
            title: 'Anasayfa',
          }}
        />
        <Tab.Screen
          name="Siparişlerim"
          component={View}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="receipt"
                size={24}
                color={focused ? '#f87d1d' : '#737373'}
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
                color={focused ? '#f87d1d' : '#737373'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
