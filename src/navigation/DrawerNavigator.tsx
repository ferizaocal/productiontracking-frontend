import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';
import Profil from '../screens/Profil/Profil';
const Drawer = createDrawerNavigator();
const DrawerStack = createStackNavigator();
const DrawerStackNavigator = () => {
  return (
    <DrawerStack.Navigator screenOptions={{headerShown: false}}>
      <DrawerStack.Screen component={DrawerNavigator} name="Main" />
      <DrawerStack.Screen component={Profil} name="Profil" />
    </DrawerStack.Navigator>
  );
};
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen component={BottomTabNavigator} name={'BottomTab'} />
    </Drawer.Navigator>
  );
}

export default DrawerStackNavigator;
// Custom Header Başlık eklenecek.
// Drawer Content kısmına logo ve menüler gelicek.
// Menüler: Kullanıcılar, Siparişler, Kumaşlar(Marka, Model Tanımalama), Stok Yönetimi, Rapor, Yönetim, Çıkış Yap
// Production Tracking Card Düzeltilecek. Karşılarına değer gelicek.(Font Size) ve iconda eklencek.(Whatsapp deki örnek alınacak)
// Bottom Tab whatsaptaki ile aynı olacka(Pantolon icon kısmı olmayacak.)

//ARAŞTIRMA KONUSU
//Svg icon nasıl eklenir. (Tekstilde var dosya yolu => src-svg klaösründe)
