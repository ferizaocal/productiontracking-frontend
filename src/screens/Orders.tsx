import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import SearchBar from '../components/SearchBar/SearchBar';
import {AppState} from '../store';
import {useSelector} from 'react-redux';

export default function Orders(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            sx={{marginLeft: 15, color: '#5f5e70', fontSize: 20}}
            label={I18n.t('orderscreen_title', {locale: language})}
          />
        </View>
        <SearchBar
          sx={{marginLeft: 0}}
          inputStyleProps={{
            borderRadius: 4,
          }}
        />
      </SafeAreaView>
    </View>
  );
}
