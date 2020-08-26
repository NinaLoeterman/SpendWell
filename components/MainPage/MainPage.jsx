import React from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, Button, Image, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ProductsList from "../ProductsList";
import { PostBarcode } from '../../lib/api';
import Spinner from "react-native-loading-spinner-overlay";
import Navbar from "../Navbar/navbar";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';


const MainPage = () => {
const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const barCodeScanned = ({data}) => {
    toggleModal();
}

  return (
    <View style={styles.container}>
      <Navbar />
      <BarCodeScanner style={styles.camera} onBarCodeScanned = {barCodeScanned} />
      <StatusBar style="auto" />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Spinner
            visible={spinner}
            textContent={"Loading healthier products:)"}
            textStyle={styles.spinnerTextStyle}
          />
          <ProductsList/>
          <Button color="white" title="X" onPress={toggleModal} />
        </View>
      </Modal>
      <View style={styles.scanningContainer}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10 }} />
        )}
        <View style={styles.barcodeOuterContainer}>
        <View style={styles.barcodeContainer}>
          <Ionicons
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
    //   backgroundColor: "#89db9b",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 20,
      width: 80,
      height: 80,
    },
    modalContent: {
      backgroundColor: 'blue',
      height: '90%'
    },
    scanningContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 1,
      marginBottom: 20,
      marginTop: 50,
    },
    camera: {
        marginTop: 50,
        display: 'flex',
        height: "60%",
    }
  });
  
 
export default MainPage;