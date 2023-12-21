import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import LoginInput from '../../components/LoginInput/LoginInput';

import Label from '../../components/Text/Label';
import EmailSvg from '../../Svg/EmailSvg';
import PasswordSvg from '../../Svg/PasswordSvg';
import Button from '../../components/Buttons/Default';
import I18n from '../../lang/_i18n';
import {useNavigation} from '@react-navigation/native';
import {goNavigate} from '../../utils/Helper';
import RouteTypes from '../../types/RouteTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {AuthActions} from '../../store/slice/authSlice';
import {postLogin} from '../../utils/api';

export default function LoginForm() {
  const dispatch = useDispatch();
  const {language} = useSelector((state: AppState) => state.app);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    await postLogin(email, password)
      .then(donenYanit => {
        // backendde istek durumu ok ise buraya düşer
        console.log('THENE DÜŞTÜ', donenYanit.data);
        //şiimdi benim yapımda burada iSsuccesFul true gelmiş ve entity içimde verilerimde gelmiş gördün mü
        //
        if (
          donenYanit.data.isSuccessful === true &&
          donenYanit.data.entity != null
        ) {
          //GİRİŞ BAŞARILI
          Alert.alert('Başarılı', 'Giriş Başarılı tebrikler');
        } else {
          Alert.alert('Başarısız', 'Eposta veya şifre yanlış');
        }
      })
      .catch(er => {
        Alert.alert('Başarısız', 'Eposta veya şifre yanlış');
        console.log('CATCHE DÜŞTÜ', er);
        //hata alırsak backend tarafından buraya düşer
      })
      .finally(() => {
        //BURASI DEFAULT OLARKA ÇALIŞIR YANİ HATA ALDI VEYA ALMADI YİNEDE ÇALIŞIR
      });
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        width: '100%',
        height: '60%',
        bottom: 0,
      }}>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Label
          font="Raleway-Bold"
          sx={{fontSize: 24, marginTop: 10, marginBottom: 30}}
          label={I18n.t('loginscreen_title', {locale: language})}
        />
        <LoginInput
          autoCapitalize="none"
          value={email}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          autoCorrect={false}
          svg={<EmailSvg />}
          sx={{marginBottom: 30}}
          title={I18n.t('loginscreen_email', {locale: language})}
        />
        <LoginInput
          value={password}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          secureTextEntry={true}
          svg={<PasswordSvg />}
          title={I18n.t('loginscreen_password', {locale: language})}
        />
        <TouchableOpacity
          onPress={() => {
            goNavigate(navigation, RouteTypes.FORGOT_PASSWORD_SCREEN);
          }}
          style={{marginTop: 10}}>
          <Label
            font="Raleway-SemiBold"
            sx={{fontSize: 15, color: '#D8B267'}}
            label={I18n.t('loginscreen_forgotpassword', {locale: language})}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Button
            onPress={() => {
              handleLogin();
              // dispatch(
              //   AuthActions.setUser({
              //     name: 'ferizaocal@gmail.com',
              //     password: '123456',
              //   }),
              // );
            }}
            activeOpacity={0.8}
            sx={{marginTop: 30, width: '50%'}}>
            <Label
              font="Raleway-SemiBold"
              sx={{fontSize: 15, color: 'white'}}
              label={I18n.t('loginscreen_button', {locale: language})}
            />
          </Button>
        </View>
      </View>
    </View>
  );
}
