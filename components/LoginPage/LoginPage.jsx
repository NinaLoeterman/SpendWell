import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function LoginPage() {
  const [email, onChangeEmail] = React.useState("email");
  const [password, onChangePassword] = React.useState("password");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <View style={styles.circle} /> */}

      <View style={styles.card}>
        <Image
          style={styles.strawberry}
          source={require("/Users/ninaloeterman/ITC/ITC Hackathon 2020/SpendWell/pics/strawberry.png")}
        />
        <View style={styles.logInSingUp}>
          <Text style={styles.logIn}>Sign In</Text>
          <Text style={styles.signUp}>Create an account</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          clearTextOnFocus
          placeholder={'email'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          clearTextOnFocus
          secureTextEntry={true}
          placeholder = 'password'
          // value={password}
        />
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Text>Let's scan products!</Text>
        </TouchableOpacity>
        <Text style={styles.title}>or</Text>
        <View style={styles.googleButton}>
          <Button title="Signin with Google" />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: 350,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    position: "absolute",
    zIndex: 1,
    top: 60,
  },
  logInSingUp: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginBottom: 20,
  },
  logIn: {
    flex: 1,
    fontWeight: "bold",
  },
  signUp: {
    flex: 1,
  },
  title: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 24,
    fontSize: 30,
  },
  newButton: {
    alignItems: "center",
    borderColor: "#89db9b",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  googleButton: {
    width: 200,
    height: 100,
    // title: "Signin with Google",
    borderRadius: 4,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#89db9b",

    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  strawberry: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});
