import React from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import Modal from "react-native-modal";
import ProductsList from "../ProductsList";
import { PostBarcode } from '../../lib/api';
import Spinner from "react-native-loading-spinner-overlay";
import Navbar from "../Navbar/navbar";
import { Ionicons } from "@expo/vector-icons";

const MainPage = () => {
const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [productsData, setProductsData] = useState([]);

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

  const productOne = {
    "barcode": 78742432885,
  }
  const productTwo = {
    "barcode": 36800318526,
  }
  const productThree = {
    "barcode": 76983400182,
  }

  const productFour = {
    "barcode": 1938067,
  }

  // const productFour = {
  //   "barcode": 78742155500,
  // }

  // const productFour = {
  //   "barcode": 98487300164,
  // }

  // const productFour = {
  //   "barcode": 78742119243,
  // }
  
  // const testApi = () => {
  //   const example = {
  //     "barcode": 234362,
  //     "brand": "nesle",
  //     "name": "chocolate milk",
  //     "description": "very tasty"
  //   }
  //   PostBarcode(example);
  // }
  
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
        PostBarcode(productFour)
        .then((res) => {
          console.log(res.data);
          setProductsData(res.data);
          console.log(productsData)
        })
        .catch((err) => console.log("There was a problem sending the product data", err));

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
          <ProductsList productsData={productsData}/>
          <Button color="white" title="X" onPress={toggleModal} />
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
          // onPress={testApi}
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
  });
  
 
export default MainPage;