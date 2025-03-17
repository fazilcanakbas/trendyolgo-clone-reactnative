import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "@/src/screen/AccountScreen";
import UsersInfoScreen from "@/src/screen/AccountScreens/UsersInfoScreen";
import SavedCardsScreen from "@/src/screen/AccountScreens/SavedCardsScreen";
import PasswordChangeScreen from "@/src/screen/AccountScreens/PasswordChangeScreen";
import { View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const { height } = Dimensions.get('window');

const Stack = createStackNavigator();

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
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 17 }}>Hesabım</Text>
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
                  <View style={{ marginLeft:-29, marginTop: 25 ,flexDirection:'row',gap:40}} >
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
                  <View style={{ marginLeft:-40, marginBottom:-25 ,flexDirection:'row',gap:40}} >
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
                  <View style={{ marginLeft:-60, marginTop: 25 ,flexDirection:'row',gap:40}} >
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
 
      export default AccountStack;