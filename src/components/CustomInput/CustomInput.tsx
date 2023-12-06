import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';

interface CustomInputProps extends TextInputProps {}
export default function CustomInput(props: CustomInputProps) {
  return <TextInput style={styles.input} {...props} />;
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgrey',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
