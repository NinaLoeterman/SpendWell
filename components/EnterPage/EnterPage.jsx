import React from "react";
import { View, Image } from "react-native";

const EntryPage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../pics/SpendWellGreen.png")}
      />
    </View>
  );
};

export default EntryPage;
