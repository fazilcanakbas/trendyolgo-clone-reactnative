import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from '../navigation/MainTabNavigator';

export default function RootNavigator() {
  return (
   <>
      <MainTabNavigator />
   </>
  );
}
