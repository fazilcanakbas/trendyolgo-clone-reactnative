import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';  // HomeScreen'ini doğru şekilde import edin
import { FontAwesome } from '@expo/vector-icons';  // Örnek icon kullanımı

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AnaSayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#EEEEEE',
          position: 'absolute',
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="AnaSayfa"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      {/* Diğer ekranları ekleyebilirsiniz */}
    </Tab.Navigator>
  );
}

export default RootNavigator;
