import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/screen/HomeScreen';
import FoodSelectionScreen from '../../src/screen/FoodSelectionScreen';
import RestoranScreen from '@/src/screen/RestoranScreen';
import AccountScreen from '@/src/screen/AccountScreen';
import UsersInfoScreen from '@/src/screen/AccountScreens/UsersInfoScreen';
import { View, Text, Dimensions, StatusBar } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SavedCardsScreen from '@/src/screen/AccountScreens/SavedCardsScreen';
import PasswordChangeScreen from '@/src/screen/AccountScreens/PasswordChangeScreen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FoodSelectionScreen" component={FoodSelectionScreen} options={{ headerShown: false, headerLeft: () => null }} />
      <Stack.Screen name="MarketScreen" component={View} />
      <Stack.Screen name="WaterScreen" component={View} />
      <Stack.Screen options={{ headerShown: false }} name="RestoranScreen" component={RestoranScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="UsersInfoScreen" component={UsersInfoScreen} />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      {/*Hesabım*/}
      <Stack.Screen  options={{
         
         headerStyle: {
          height: height * 0.077,
          backgroundColor: '#fff',
          elevation: 20,
          shadowColor: '#000',
        },
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -15 }}>Hesabım</Text>
          </View>),
          headerTitleAlign: 'center',
}} 
        name="AccountScreen" 
        component={AccountScreen}  />

    {/*Kullanıcı Bilgilerim*/}
    <Stack.Screen options={{
         
         headerStyle: {
          height: height * 0.077,
          backgroundColor: '#fff',
          elevation: 20,
          shadowColor: '#000',
        },
        headerTitle: () => (
          <View style={{  }}>
            
          </View>),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View style={{ marginLeft:-29, marginTop: -8 ,flexDirection:'row',gap:40}} >
                <Ionicons  onPress={() => navigation.goBack()}  name="arrow-back-outline" size={30} color="black" style={{
                  marginLeft: 80,
                  
                }} />
                <Text style={{ fontSize: 17.5, fontWeight: 'bold',marginTop:2 }}>Kullanıcı Bilgilerim</Text>
              </View>
            );
          },
          headerTitleStyle: {
          
          },
          headerLeftContainerStyle: {
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
          },
}} name="UsersInfoScreen" component={UsersInfoScreen} />


       {/*Kayıtlı Kartarım*/}
       <Stack.Screen options={{
         
         headerStyle: {
          height: height * 0.077,
          backgroundColor: '#fff',
          elevation: 20,
          shadowColor: '#000',
        },
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            
          </View>),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View style={{ marginLeft:-40, marginBottom:12 ,flexDirection:'row',gap:40}} >
                <Ionicons  onPress={() => navigation.goBack()}  name="arrow-back-outline" size={30} color="black" style={{
                  marginLeft: 80,
                  
                }} />
                <Text style={{ fontSize: 17.5, fontWeight: 'bold', marginTop:2}}>Kayıtlı Kartlarım</Text>
              </View>
            );
          },
          headerTitleStyle: {
           
          },
          headerLeftContainerStyle: {
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
          },
}}  name="SavedCardsScreen" component={SavedCardsScreen} />


       {/*Şifre Değişikliği*/}
       <Stack.Screen options={{
         
         headerStyle: {
          height: height * 0.077,
          backgroundColor: '#fff',
          elevation: 20,
          shadowColor: '#000',
        },
        headerTitle: () => (
          <View style={{ flex: 1 }}>
            
          </View>),
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <View style={{ marginLeft:-60, marginTop: -8 ,flexDirection:'row',gap:40}} >
                <Ionicons  onPress={() => navigation.goBack()}  name="arrow-back-outline" size={30} color="black" style={{
                  marginLeft: 80,
                  
                }} />
                <Text style={{ fontSize: 17.5, fontWeight: 'bold', }}>Şifre Değişikliği</Text>
              </View>
            );
          },
          headerTitleStyle: {
            marginLeft:78
          },
          headerLeftContainerStyle: {
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
          },
}}  name="PasswordChangeScreen" component={PasswordChangeScreen} />





    </Stack.Navigator>
  );}

export default function Index() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (loading) {
    return (
      <View style={{ width: width * width, height: height * height, backgroundColor: '#f27a1b' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f87d1d',
          tabBarInactiveTintColor: '#737373',
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Entypo name="home" size={24} color={focused ? '#f87d1d' : '#737373'} />
            ),
            title: 'Anasayfa',
          }}
        />
        <Tab.Screen
          name="Siparişlerim"
          component={View}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="receipt" size={24} color={focused ? '#f87d1d' : '#737373'} />
            ),
          }}
        />
        <Tab.Screen
          name="Hesabım"
          component={AccountStack}
          options={{
            headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="user-large" size={24} color={focused ? '#f87d1d' : '#737373'} />
            ),
          
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}