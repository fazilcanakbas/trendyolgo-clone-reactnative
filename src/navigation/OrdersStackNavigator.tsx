import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "@/src/screen/OrdersScreen";

const Stack = createStackNavigator();

export default function OrdersStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
}
