import React from 'react';
import {SafeAreaView} from 'react-native';
import ForgotPasswordForm from '../sections/Auth/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D8B267'}}>
      <ForgotPasswordForm />
    </SafeAreaView>
  );
}
