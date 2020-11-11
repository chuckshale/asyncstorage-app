import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

// Screen Imports
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OtherScreen from "./screens/OtherScreen";

const Stack = createStackNavigator();

const MainNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.userToken !== null ? "Home" : "Login"}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
