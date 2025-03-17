import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from '../../src/redux/store';
import RootNavigator from "@/src/navigation/RootNavigator";


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </Provider>
  );
}
