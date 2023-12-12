import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';

import Fonts from '../../types/font';

interface LabelProps extends TextProps {
  label: string;
  font?: Fonts;
  sx?: StyleProp<TextStyle>;
}

export default function Label(prop: LabelProps) {
  return (
    <Text style={[{...styles.label, fontFamily: prop.font}, prop.sx]}>
      {prop.label}
    </Text>
  );
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Raleway-SemiBold',
  },
});
