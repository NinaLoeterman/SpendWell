import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './components/LoginPage/LoginPage';
import ScanBarCode from './components/ScanBarCode/ScanBarCode';

const Stack = createStackNavigator();

export default function App() {
  const LoginPage = LoginPage()
  const ScanBarCode = ScanBarCode()


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen
          name="Home"
          component={LoginPage}
        />
        <Stack.Screen
            name="ScanBarCode"
            component={ScanBarCode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
