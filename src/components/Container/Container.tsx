import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

interface ContainerProps {
  bgColor?: string;
  children: any;
  isLoading?: boolean;
}

export default function Container(props: ContainerProps) {
  return (
    <View
      style={{
        backgroundColor: props.bgColor ? props.bgColor : '#F5F5F5',
        flex: 1,
      }}>
      {props.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size="large" />
        </View>
      ) : (
        props.children
      )}
    </View>
  );
}
