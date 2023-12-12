import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Label from '../Text/Label';

interface ColProps extends TouchableOpacityProps {
  name?: string;
  icon: any;
}
const Col = (props: ColProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        paddingVertical: 10,
      }}>
      <Label
        font="Raleway-Bold"
        sx={{
          color: '#5F5E70',
          fontSize: 16,
        }}
        label={props.name ? props.name : ''}
      />
      {props.icon}
    </TouchableOpacity>
  );
};
export default Col;
