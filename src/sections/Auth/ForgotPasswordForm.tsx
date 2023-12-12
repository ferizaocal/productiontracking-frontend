import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import LoginInput from '../../components/LoginInput/LoginInput';

import Label from '../../components/Text/Label';
import EmailSvg from '../../Svg/EmailSvg';
import Button from '../../components/Buttons/Default';
import I18n from '../../lang/_i18n';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';

export default function ForgotPasswordForm() {
  const {language} = useSelector((state: AppState) => state.app);
  const navigation = useNavigation();
  return (
    <View style={styles.formContainer}>
      <View style={styles.body}>
        <Label
          font="Raleway-Bold"
          sx={{
            fontSize: 24,
            marginTop: 10,
            marginBottom: 30,
          }}
          label={I18n.t('forgotpasswordscreen_title', {locale: language})}
        />
        <LoginInput
          autoCapitalize="none"
          value="example@hotmail.com"
          autoCorrect={false}
          svg={<EmailSvg />}
          sx={{marginBottom: 10}}
          title={I18n.t('loginscreen_email', {locale: language})}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.forgotpassword}>
          <FontAwesomeIcon
            style={{marginRight: 5}}
            color="#D8B267"
            icon={faAngleLeft}
          />
          <Label
            font="Raleway-SemiBold"
            sx={{
              fontSize: 15,
              color: '#D8B267',
            }}
            label={I18n.t('forgotpasswordscreen_back', {locale: language})}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Button
            activeOpacity={0.8}
            sx={{
              marginTop: 30,
              width: '50%',
            }}>
            <Label
              font="Raleway-SemiBold"
              sx={{
                fontSize: 15,
                color: '#fff',
              }}
              label={I18n.t('forgotpasswordscreen_button', {locale: language})}
            />
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
  },
  body: {
    marginHorizontal: 40,
    marginVertical: 10,
  },
  forgotpassword: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
