import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Checkout from "../screens/Checkout";
import Detail from "../screens/Detail"
import Search from '../screens/Search'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#EEF2FA' }}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#EEF2FA' }}}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const CheckoutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#EEF2FA' }}}>
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator, CheckoutStackNavigator, SearchStackNavigator };