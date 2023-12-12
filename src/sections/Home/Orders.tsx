import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import Label from '../../components/Text/Label';
import I18n from '../../lang/_i18n';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
export default function Orders() {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View>
      <View style={styles.col}>
        <Label
          font="Raleway-Bold"
          sx={{color: '#5F5E70', fontSize: 15}}
          label={I18n.t('homescreen_ordertitle', {locale: language})}
        />
        <Label
          font="Raleway-Bold"
          sx={{color: '#D8B267', fontSize: 12}}
          label={I18n.t('global_viewall', {locale: language})}
        />
      </View>
      <ScrollView
        onScroll={() => {}}
        scrollEventThrottle={16}
        bounces={false}
        snapToInterval={Dimensions.get('screen').width / 2 - 20}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  col: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
