import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import RouteTypes from '../../navigation/RouteTypes';

const Logo = require('../../../assets/images/tekstil.png');
export default function Login(props: any) {
  const {height} = useWindowDimensions();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const handleForgotPassword = () => {
    props.navigation.navigate(RouteTypes.FORGOTPASSWORD_SCREEN);
  };
  const handleLogin = () => {
    props.navigation.navigate(RouteTypes.HOME_SCREEN);
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
          <Text style={styles.headerLogin}>GİRİŞ YAP</Text>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#87575C', fontWeight: 'bold'}}>Email:</Text>
            <CustomInput value={username} onChangeText={setUsername} />
          </View>
          <Text style={{color: '#87575C', fontWeight: 'bold'}}>Şifre:</Text>
          <CustomInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{marginVertical: 10}}
            activeOpacity={0.6}
            onPress={() => {
              handleForgotPassword();
            }}>
            <Text style={{color: '#87575C', fontSize: 15}}>
              Şifremi Unuttum
            </Text>
          </TouchableOpacity>

          <CustomButton
            onPress={() => {
              handleLogin();
            }}
            text="Giriş Yap"
          />
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
  headerLogin: {
    color: '#87575C',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

// Kullanıcılar
// Pastal
// Ürün Takibi
// İş Süreci
// Üretim
// Ürün Kodları
// Kumaş
