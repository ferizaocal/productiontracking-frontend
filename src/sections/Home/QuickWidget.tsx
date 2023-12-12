import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';
interface QuickWidgetProps extends PressableProps {
  label: string;
  icon?: any;
}
export default function QuickWidget(props: QuickWidgetProps) {
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: '#D8B267',
        width: 100,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 2, //android gilge
      }}>
      {props.icon}
      <Label
        sx={{
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 15,
          color: 'white',
        }}
        font="Raleway"
        label={props.label}
      />
    </Pressable>
  );
}
