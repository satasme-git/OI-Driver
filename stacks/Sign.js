import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React, { useEffect, useState ,useContext } from "react";
import LanguageSelect from '../screens/LanguageSelect';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import PhoneNumber from '../screens/PhoneNumber';
import Home from '../screens/Home';
import VehicalReg1 from '../screens/VehicalReg1';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='LanguageSelect' 
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
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <MyStack />
    );
  }