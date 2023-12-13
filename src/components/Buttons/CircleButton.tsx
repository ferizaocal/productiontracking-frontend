import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface CircleButtonProps extends TouchableOpacityProps {
  icon: any;
  shadown?: boolean;
  bottom?: number;
  isSvg?: boolean;
}
export const CircleButton = memo((props: CircleButtonProps) => {
  let bottom = props.bottom ? props.bottom : 30;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[{...styles.circleButon, bottom: bottom}, styles.shadown]}>
      {props.isSvg ? (
        props.icon
      ) : (
        <FontAwesomeIcon size={25} color="#594E3C" icon={props.icon} />
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  circleButon: {
    backgroundColor: '#D8B267',
    position: 'absolute',
    right: 30,
    bottom: 30,
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },
  shadown: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
