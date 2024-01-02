import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';
import useThemeColors from '../../constant/useColor';
interface QuickWidgetProps extends PressableProps {
  label: string;
  icon?: any;
}
export default function QuickWidget(props: QuickWidgetProps) {
  const colors = useThemeColors();
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: colors.primary,
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
        elevation: 2,
      }}>
      {props.icon}
      <Label
        sx={{
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 15,
          color: colors.textColor,
        }}
        font="Raleway"
        label={props.label}
      />
    </Pressable>
  );
}
