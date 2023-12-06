import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {memo} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
const Logo = require('../../assets/images/tekstil.png');
export default function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Image source={Logo} style={styles.drawerImage} />
      </View>
      <DrawerButton
        onPress={() => {
          props.navigation.navigate('Profil');
          props.navigation.navigate('menü');
        }}
        icon={<FontAwesomeIcon icon={faUser} />}
        label="Profilim"
      />
    </SafeAreaView>
  );
}
interface DrawerButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: React.ReactNode;
}
const DrawerButton = memo(function MyDrawerButton(props: DrawerButtonProps) {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      {props.icon && props.icon}
      <Text
        style={{
          fontSize: 16,
          marginLeft: props.icon ? 14 : 39,
          color: '#594E3C',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 15,
    marginHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  drawerImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
    flex: 1,
  },
});
