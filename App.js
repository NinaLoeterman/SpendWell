import * as React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import MainPage from "./components/MainPage/MainPage.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
