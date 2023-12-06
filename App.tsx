import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './src/screens/Login/Login';
import AuthNavigator from './src/navigation/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
