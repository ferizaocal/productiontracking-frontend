import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faHome} color={focused ? 'red' : 'pink'} />
          ),
        }}
        component={Home}
        name={'Home'}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faHome} color={focused ? 'red' : 'pink'} />
          ),
        }}
        component={Home}
        name={'Settings'}
      />
    </Tab.Navigator>
  );
}
