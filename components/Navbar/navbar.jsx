import { useEffect, useState } from "react";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.image}
        source={require("../../pics/SpendWell.png")}
      />
      <Ionicons style={styles.hamburger} name="md-menu" size={32} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  hamburger: {
    padding: 25,
  }
});

export default Navbar;
