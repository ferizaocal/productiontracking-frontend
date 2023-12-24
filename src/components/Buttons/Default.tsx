import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
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
  const {isLoading, label, children} = props;
  const colors = useThemeColors();
  const opacityColor = colors.saveButton + '80';
  return (
    <TouchableOpacity
      {...props}
      style={[
        props.sx,
        {
          backgroundColor: props.disabled ? opacityColor : colors.saveButton,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        },
      ]}>
      {isLoading ? (
        <ActivityIndicator color={'#fff'} />
      ) : props.label ? (
        <Label
          font="Raleway-SemiBold"
          sx={{
            fontSize: 15,
            color: '#fff',
          }}
          label={label}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
