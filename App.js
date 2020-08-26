// import * as React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import MainPage from "./components/MainPage/MainPage.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import { NativeRouter, Route, Link } from "react-router-native";
import "react-native-gesture-handler";
import * as React from "react";
import {useState, useEffect} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EnterPage from './components/EnterPage/EnterPage.jsx'

const Stack = createStackNavigator();

export default function App() {
  const [isEnter, setIsEnter] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      setIsEnter(false)
    }, 2000)
  }, []); 

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={isEnter ? EnterPage : LoginPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
