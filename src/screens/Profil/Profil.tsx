import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default function Profil(props: any) {
  return (
    <View>
      <CustomHeader
        leftIconOnPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}
