import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from '../navigation/HomeStackNavigator';
import OrdersStackNavigator from "../navigation/OrdersStackNavigator";
import AccountStackNavigator from "../navigation/AccountStackNavigator";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  if (["RestaurantProductScreen", "FoodSelectionScreen", "RestoranScreen"].includes(routeName)) {
    return { display: "none" as const };
  }
  return undefined;
};

export default function MainTabNavigator() {
  return (
    <Tab.Navigator   screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#f87d1d',
      tabBarInactiveTintColor: '#737373',
      headerShown: false,
       })}>
      <Tab.Screen
        name="Anasayfa"
        component={HomeStackNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "#f87d1d" : "#737373"} />
          ),
          tabBarStyle: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="Siparişlerim"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="receipt" size={24} color={focused ? "#f87d1d" : "#737373"} />
          ),
        }}
      />
      <Tab.Screen
        name="Hesabım"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="user-large" size={24} color={focused ? "#f87d1d" : "#737373"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
