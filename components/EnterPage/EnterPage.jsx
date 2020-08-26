import React from "react";
import { View, Image, StyleSheet } from "react-native";

const EnterPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../pics/SpendWellEnter.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  }
});

export default EnterPage;
