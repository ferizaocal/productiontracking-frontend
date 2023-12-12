import {SafeAreaView} from 'react-native';
import React from 'react';
import LoginForm from '../sections/Auth/LoginForm';

export default function Login() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D8B267'}}>
      <LoginForm />
    </SafeAreaView>
  );
}
