import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {memo, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../../components/Text/Label';
import I18n from '../../lang/_i18n';
import {
  faAngleRight,
  faArrowLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
import ColBackground from '../../components/Cols/ColBackground';
import Col from '../../components/Cols/Col';
import RouteTypes from '../../types/RouteTypes';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {CircleButton} from '../../components/Buttons/CircleButton';
import Popover from '../../components/Popover/Popover';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Default';

export default function Users(props: any) {
  const {roleName} = props?.route?.params;
  const {language} = useSelector((state: AppState) => state.app);
  const goToAddUserPage = () => {
    props.navigation.navigate(RouteTypes.ADD_USER_SCREEN, {roleName: roleName});
  };
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
            label={
              roleName + ' ' + I18n.t('usersscreen_title', {locale: language})
            }
          />
        </View>
      </SafeAreaView>
      <CircleButton
        onPress={() => {
          goToAddUserPage();
        }}
        icon={faPlus}
      />
    </View>
  );
}
