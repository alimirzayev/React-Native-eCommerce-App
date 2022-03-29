import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Checkout from "../screens/Checkout";
import Detail from "../screens/Detail"
import Search from '../screens/Search'
import Login from '../screens/Login'
import Register from '../screens/Register'
import { auth } from "../firebase";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#EEF2FA' }}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
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

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#EEF2FA' }}}>
      {auth.currentUser?.email ? 
      <>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      </>
      :
      <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      </>
      }
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator, CheckoutStackNavigator, SearchStackNavigator, LoginStackNavigator };