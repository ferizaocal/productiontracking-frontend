import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useThemeColors from '../../constant/useColor';

interface CustomHeaderProps {
  leftIcon?: any;
  leftIconOnPress?: () => void;
}
export default function CustomHeader(props: CustomHeaderProps) {
  const {leftIcon, leftIconOnPress} = props;
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.headerColor,
        height: insets.top === 0 ? 95 : insets.top + 36,
      }}>
      <TouchableOpacity onPress={leftIconOnPress}>
        <FontAwesomeIcon
          style={styles.leftIcon}
          size={25}
          color="#333"
          icon={leftIcon || faAngleLeft}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  leftIcon: {
    left: 10,
  },
});
