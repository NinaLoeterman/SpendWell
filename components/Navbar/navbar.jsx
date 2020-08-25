import { useEffect, useState } from "react";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.image}
        source={require("../../pics/SpendWellGreen.png")}
      />
      <Ionicons
        style={styles.hamburger}
        name="md-menu"
        size={32}
        color="#14aa6b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 100,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 90,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  hamburger: {
    padding: 30,
  },
});

export default Navbar;
