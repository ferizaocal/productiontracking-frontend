import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../Text/Label';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import I18n from 'i18n-js';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';

const Title = {
  productionmanager: 'settingsscreen_production_Title',
  operationsmanager: 'settingsscreen_operations_title',
  profile: 'profilescreen_title',
  roles: 'rolesscreen_title',
  users: 'usersscreen_title',
  confirmation: 'confirmationscreen_title',
  report: 'reportsscreen_title',
  settings: 'settingscreen_title',
  orders: 'orderscreen_title',
};
type TitleString = keyof typeof Title;

interface HeaderProps {
  title?: TitleString;
  extraTitle?: string;
}
export default function Header(props: HeaderProps) {
  const {title, extraTitle} = props;
  const {language} = useSelector((state: AppState) => state.app);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View
        style={{
          // marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
        </TouchableOpacity>
        <Label
          font="Raleway-Bold"
          sx={{fontSize: 20, color: '#5F5E70', marginLeft: 15}}
          label={
            extraTitle
              ? extraTitle
              : title === undefined
              ? ''
              : '' +
                I18n.t(Title[title], {
                  locale: language,
                })
          }
        />
      </View>
    </SafeAreaView>
  );
}
