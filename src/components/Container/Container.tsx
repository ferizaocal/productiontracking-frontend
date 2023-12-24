import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import useThemeColors from '../../constant/useColor';

interface ContainerProps {
  bgColor?: string;
  children?: any;
  isLoading?: boolean;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
}

export default function Container(props: ContainerProps) {
  const colors = useThemeColors();
  return (
    <View
      style={{
        backgroundColor: props.bgColor ? props.bgColor : '#F5F5F5',
        flex: 1,
        marginHorizontal: props.mx ? props.mx : 0,
        marginVertical: props.my ? props.my : 0,
        marginTop: props.mt ? props.mt : 0,
        marginBottom: props.mb ? props.mb : 0,
      }}>
      {props.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={colors.loadingColor} size="small" />
        </View>
      ) : (
        props.children
      )}
    </View>
  );
}
