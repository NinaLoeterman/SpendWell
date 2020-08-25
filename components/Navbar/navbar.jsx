import { useEffect, useState } from "react";
import React from "react";
import { AppRegistry, View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const Navbar = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={require("../../pics/SpendWell.png")}
      />
      <Icon name="rocket" size={30} color="#900" />{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
  },
});

export default Navbar;
