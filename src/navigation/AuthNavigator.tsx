import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; //Sign Up
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import RouteTypes from './RouteTypes';
const Stack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteTypes.LOGIN_SCREEN} component={Login} />
      <Stack.Screen
        name={RouteTypes.FORGOTPASSWORD_SCREEN}
        component={ForgotPassword}
      />
      <Stack.Screen name={RouteTypes.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
}

/*
Stack Navigator  
Drawer Navigator
BottomNavigator

*/
