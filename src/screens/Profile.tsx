import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
export default function Profile(props: any) {
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
            sx={{fontSize: 20, color: '#5F5E70', marginLeft: 15}}
            label={I18n.t('profilescreen_title', {locale: language})}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
