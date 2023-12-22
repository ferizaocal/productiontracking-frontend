import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Label from '../Text/Label';
import useThemeColors from '../../constant/useColor';

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: StyleProp<ViewStyle>;
  class?: any;
  label?: any;
}
export default function Button(props: ButtonProps) {
  const colors = useThemeColors();
  return (
    <TouchableOpacity
      {...props}
      style={[
        props.sx,
        {
          backgroundColor: colors.saveButton,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        },
      ]}>
      {props.label ? (
        <Label
          font="Raleway-SemiBold"
          sx={{
            fontSize: 15,
            color: '#fff',
          }}
          label={props.label}
        />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
}
