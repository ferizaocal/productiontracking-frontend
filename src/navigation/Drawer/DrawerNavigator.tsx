import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerStackNavigaton from './DrawerStackNavigator';

const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator() {
  return <DrawerStackNavigaton />;
}
