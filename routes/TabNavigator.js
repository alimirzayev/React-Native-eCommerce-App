import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false
    }}
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'relative',
        height: '11.3%',
        paddingTop: '5%',
        backgroundColor: '#21262E',
        borderWidth: 1,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
      },
    }}
    >
      <Tab.Screen
      name="Home"
      component={MainStackNavigator}
      tabBarActiveTintColor= 'tomato'
      tabBarInactiveTintColor='gray'
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={25} color="#EEF2FA" />
      )
      }}
      />

      <Tab.Screen
      name="Contact"
      component={ContactStackNavigator}
      tabBarActiveTintColor= 'tomato'
      tabBarInactiveTintColor='gray'
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" size={25} color="#EEF2FA" />
      )
      }}
      />

      <Tab.Screen
      name="About"
      component={ContactStackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={25} color="#EEF2FA" />
      )
      }}
      />

      <Tab.Screen
      name="Cart"
      component={ContactStackNavigator}
      options={{
        tabBarBadge: 3,
        tabBarBadgeStyle: { backgroundColor: 'red', height: 17, },
        tabBarIcon: ({ color, size }) => (
          <Icon name="shopping-cart" size={25} color="#EEF2FA" />
      )
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;