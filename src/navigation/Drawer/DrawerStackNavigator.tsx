import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

import RouteTypes from '../../types/RouteTypes';
import BottomTab from '../BottomTabs/BottomTab';
import Settings from '../../screens/Settings';
import Report from '../../screens/Report';
import Users from '../../screens/Users';
import Orders from '../../screens/Orders';
import Materials from '../../screens/Materials';
import Profile from '../../screens/Profile';
import Confirmation from '../../screens/Confirmation';
const DrawerNavigation = createDrawerNavigator();
const DrawerStack = createNativeStackNavigator();
export default function DrawerStackNavigaton() {
  return (
    <DrawerStack.Navigator screenOptions={{headerShown: false}}>
      <DrawerStack.Screen name="Main" component={DrawerScreen} />
      <DrawerStack.Screen name={RouteTypes.USERS_SCREEN} component={Users} />
      <DrawerStack.Screen name={RouteTypes.ORDERS_SCREEN} component={Orders} />
      <DrawerStack.Screen
        name={RouteTypes.CONFIRMATION_SCREEN}
        component={Confirmation}
      />
      <DrawerStack.Screen
        name={RouteTypes.MATERIALS_SCREEN}
        component={Materials}
      />
      <DrawerStack.Screen
        name={RouteTypes.PROFILE_SCREEN}
        component={Profile}
      />
      <DrawerStack.Screen
        name={RouteTypes.SETTINGS_SCREEN}
        component={Settings}
      />
      <DrawerStack.Screen name={RouteTypes.REPORT_SCREEN} component={Report} />
    </DrawerStack.Navigator>
  );
}
const DrawerScreen = (props: any) => {
  return (
    <DrawerNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <DrawerNavigation.Screen
        name={RouteTypes.MAIN_BOTTOM_TAB}
        component={BottomTab}
      />
    </DrawerNavigation.Navigator>
  );
};
