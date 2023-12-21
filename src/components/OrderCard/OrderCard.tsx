import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Label from '../Text/Label';
import dayjs from 'dayjs';
import ArrowRightSvg from '../../Svg/ArrowRightSvg';
import I18n from '../../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';

interface OrderCardProps {
  width: string;
}
export default function OrderCard(props: OrderCardProps) {
  const width = props.width
    ? props.width
    : Dimensions.get('window').width / 2 - 25;
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <Pressable
      onPress={() => {
        console.log('a');
      }}
      style={{
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        width: width,
      }}>
      <View
        style={{
          backgroundColor: '#D8B267',
          height: 25,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginBottom: 10,
          borderTopLeftRadius: 10,
        }}>
        <Label
          label={I18n.t('homescreen_order_productcode', {locale: language})}
          font="Raleway-SemiBold"
          sx={{color: '#fff', fontSize: 11}}
        />
        <Label
          label="0001"
          font="Raleway-Bold"
          sx={{color: '#fff', fontSize: 13}}
        />
      </View>
      <View style={styles.col}>
        <Label
          label={I18n.t('homescreen_order_orderno', {locale: language})}
          font="Raleway-Bold"
          sx={{color: '#594E3C', fontSize: 10}}
        />
        <Label
          label="001"
          font="Raleway-Bold"
          sx={{color: '#594E3C', fontSize: 10}}
        />
      </View>
      <View style={styles.col}>
        <Label
          label={I18n.t('homescreen_order_quantity', {locale: language})}
          sx={{
            fontFamily: 'Raleway-Bold',
            color: '#594E3C',
            fontSize: 10,
          }}
        />
        <Label
          label="1"
          sx={{
            fontFamily: 'Raleway-Bold',
            color: '#594E3C',
            fontSize: 10,
          }}
        />
      </View>
      <View style={styles.col}>
        <Label
          label={I18n.t('homescreen_order_date', {locale: language})}
          font="Raleway-Bold"
          sx={{color: '#594E3C', fontSize: 10}}
        />
        <Label
          label={dayjs(new Date(2011, 11, 11)).format('DD.MM.YYYY')}
          font="Raleway-SemiBold"
          sx={{color: '#594E3C', fontSize: 10, fontWeight: 'bold'}}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          width: '90%',
          backgroundColor: '#D8B267',
          height: 0.5,
        }}></View>
      <View
        style={{
          marginTop: 2,
          marginRight: 5,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity style={{width: 100, alignItems: 'flex-end'}}>
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  col: {
    marginBottom: 6,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
