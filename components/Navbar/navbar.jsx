import { useEffect, useState } from "react";
import React from "react";
import { AppRegistry, View, Text, Image, StyleSheet } from "react-native";

const Navbar = () => {
    return ( <View style={{flex: 1}}>
        <Image
        style={styles.image}
        source={require('../../pics/SpendWell.png')}
      />
    </View> );
}
 
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
    },
  });
  

export default Navbar;