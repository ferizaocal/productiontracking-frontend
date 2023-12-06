import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import RouteTypes from '../../navigation/RouteTypes';
const Logo = require('../../../assets/images/tekstil.png');

export default function ForgotPassword(props: any) {
  const {height} = useWindowDimensions();
  const [forgotPassword, setForgotPassword] = useState('');
  const handleForgotPassword = () => {
    props.navigation.navigate(RouteTypes.LOGIN_SCREEN);
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 0.4, backgroundColor: '#D1DFBB'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 3}]}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View style={{flex: 1, backgroundColor: '#D1DFBB'}}>
        <View style={styles.root}>
          <Text style={styles.headerPassword}>ŞİFREMİ UNUTTUM!</Text>
          <View style={{marginTop: 5}}>
            <Text style={{color: '#87575C', fontWeight: 'bold'}}>Email:</Text>
            <CustomInput
              value={forgotPassword}
              onChangeText={setForgotPassword}
            />
          </View>
          <TouchableOpacity
            style={{marginVertical: 10}}
            activeOpacity={0.6}
            onPress={() => {
              handleForgotPassword();
            }}>
            <Text style={{color: '#87575C', fontSize: 15, marginBottom: 15}}>
              Giriş Ekranına Geri Dön
            </Text>
          </TouchableOpacity>

          <CustomButton text="Gönder" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 50,
    flex: 1,
    backgroundColor: '#f0ebe5',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
  headerPassword: {
    color: '#87575C',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: -10,
  },
});
