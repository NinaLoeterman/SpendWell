import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as React from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import Spinner from "react-native-loading-spinner-overlay";
import Navbar from "./components/Navbar/navbar.jsx";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
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
        toggleModal();
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <StatusBar style="auto" />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Spinner
            visible={spinner}
            textContent={"Loading healthier products:)"}
            textStyle={styles.spinnerTextStyle}
          />
          <Text style={styles.modalContent}>I am the modal content!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      <View style={styles.scanningContainer}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10 }} />
        )}
        {!image && (<Ionicons name="ios-qr-scanner" color="#89db9b" size={200} />)}
        <View style={styles.barcodeOuterContainer}>
        <View style={styles.barcodeContainer}>
          <Ionicons
            onPress={_pickImage}
            style={styles.barcodeButton}
            name="ios-barcode"
            size={50}
            color="#14aa6b"
          />
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContent: {
    backgroundColor: "white",
    height: "90%",
  },
  barcodeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#89db9b",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    width: 80,
    height: 80,
  },
  scanningContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    // justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 50,
  },

});
