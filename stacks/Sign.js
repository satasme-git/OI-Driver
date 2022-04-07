import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React, { useEffect, useState ,useContext } from "react";
import LanguageSelect from '../screens/LanguageSelect';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import PhoneNumber from '../screens/PhoneNumber';
import Home from '../screens/Home';
import VehicalReg1 from '../screens/VehicalReg1';
import VehicleRgistration from '../screens/VehicleRegistration'
import VehicleChoose from '../screens/VehicleChoose'
import DrivingLicense from '../screens/DrivingLicense';
import VehicleDetails from '../screens/VehicleDetails';
import UploadDocuments from '../screens/UploadDocuments';
import UploadVehicleDocuments from '../screens/uploadVehicleDocuments';
import Complete from '../screens/Complete';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='SignIn' 
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    })}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VehicalReg1" component={VehicalReg1} />
      <Stack.Screen name="VehicleRgistration" component={VehicleRgistration} />
      <Stack.Screen name="VehicleChoose" component={VehicleChoose} />
      <Stack.Screen name="DrivingLicense" component={DrivingLicense} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
      <Stack.Screen name="UploadVehicleDocuments" component={UploadVehicleDocuments} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <MyStack />
    );
  }