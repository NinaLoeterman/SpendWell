import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";


export default function App() {
  const [image, setImage] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getPermissionAsync();
  }, []);
  
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  
  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
  
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }

  const handlePress = () => {
    alert("you pressed!");
  }
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>And have a lot of fun!</Text>
      <Button onPress={() => handlePress()} title="click me" />
      <StatusBar style="auto" />
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      <Button title="Pick an image from camera roll" onPress={_pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  
  },
});