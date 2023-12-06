import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {useState} from 'react';

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}
export default function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {...styles.container, backgroundColor: '#93B36D'},
        props.style ? props.style : {},
      ]}>
      {props.loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
