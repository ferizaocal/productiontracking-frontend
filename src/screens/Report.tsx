import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {faAngleLeft, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import I18n from '../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
import Container from '../components/Container/Container';
export default function Report(props: any) {
  const {language} = useSelector((state: AppState) => state.app);

  return (
    <Container>
      <SafeAreaView style={{marginLeft: 30, marginRight: 20}}>
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
            label={I18n.t('reportsscreen_title', {locale: language})}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
}
