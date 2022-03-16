import React from "react";
import {Button, View, Image, Pressable, Text} from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#21262E",
  },
  headerTintColor: "white",
  drawerStyle: {
    backgroundColor: '#21262E',
    width: '70%',
    color: 'white'
  },
  drawerActiveTintColor: "white",
  drawerInactiveTintColor: "white",
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={screenOptionStyle}
    >
      <Drawer.Screen 
      name="Products"
      component={TabNavigator}
      options={{
      headerRight: () => (
        <Pressable onPress={() => alert('Setting Modal is coming')}>
          <Image
            source={{uri: "https://www.iconsdb.com/icons/preview/white/settings-xxl.png"}}
            style={{
              width: 20,
              height: 20,
              marginRight: 10
            }}
          />
        </Pressable>
      ),
    }}
      />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;