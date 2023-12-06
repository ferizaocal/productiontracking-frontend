import {View, Text} from 'react-native';
import React from 'react';
import ProductionTrackingCard from '../../components/ProductionTrackingCard/ProductionTrackingCard';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Home(props: any) {
  return (
    <View>
      <CustomHeader
        leftIcon={faBars}
        leftIconOnPress={() => {
          props.navigation.openDrawer();
        }}
      />
      <ProductionTrackingCard />
    </View>
  );
}
