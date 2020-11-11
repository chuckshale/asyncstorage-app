import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useMemo, useReducer } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MainNavigation from "./components/navigation/MainNavigation";
import AsyncStorage from "@react-native-community/async-storage";
import AuthContext from "./context/Authcontext";

const App = () => {
  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "TOKEN_CHECK":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN": {
        return {
          ...prevState,
          username: action.username,
          userToken: action.token,
          isLoading: false,
        };
      }
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      login: async (username, password) => {
        if (
          !username.trim() ||
          username === "" ||
          typeof username === typeof undefined
        ) {
          alert("Please enter username");
          return;
        }
        if (
          !password.trim() ||
          password === "" ||
          typeof password === typeof undefined
        ) {
          alert("Please enter password");
          return;
        }
        let userToken;
        userToken = null;
        try {
          userToken = `${username}x215135913`;
          await AsyncStorage.setItem("userToken", userToken);
          alert("Credentials successfully Saved!");
        } catch (error) {
          console.log("error:", error);
        }
        dispatch({ type: "LOGIN", username: username, token: userToken });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken", userToken);
      } catch (error) {
        console.log("error:", error);
      }
      dispatch({ type: "TOKEN_CHECK", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <MainNavigation userToken={loginState.userToken} />
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
