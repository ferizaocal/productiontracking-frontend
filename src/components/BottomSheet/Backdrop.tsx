import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {Animated, View} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Backdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(0,0,0,0.7)',
      },
    ],
    [style],
  );

  return <View style={containerStyle} />;
};

export default Backdrop;
