import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';

export default function LoginPage() {

  const [email, onChangeEmail] = React.useState('email');
  const [password, onChangePassword] = React.useState('password');

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.card}>
        <View style={styles.logInSingUp}>
          <Text style={styles.logIn}>Sign In</Text>
          <Text style={styles.signUp}>Create an account</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeEmail(text)}
          clearTextOnFocus
          value={email}/>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
          clearTextOnFocus
          value={password}/>
          <TouchableOpacity
          style={styles.newButton}
          onPress={() =>
            navigation.navigate('ScanBarCode')}>
          <Text>Let's scan products!</Text>
        </TouchableOpacity>
        <Text style={styles.title}>or</Text>
        <View style={styles.googleButton}>
          <Button title="Signin with Google"/>
        </View>
      <StatusBar style="auto" />
      </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor: '#FCFEF5',
    width: 350,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 0
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    top: 60
  },
  logInSingUp:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    marginBottom: 20
  },
  logIn:{
    flex: 1,
    fontWeight:'bold'
  },
  signUp:{
    flex:1
  },
  title:{
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 24,
    fontSize: 34
  },
  newButton:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  googleButton:{
    width: 200,
    height: 100,
    title: "Signin with Google",
    borderRadius:4,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  }
});
