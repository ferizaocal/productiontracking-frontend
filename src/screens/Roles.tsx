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
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {
  faAngleRight,
  faArrowLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import {AppState} from '../store';
import {useSelector} from 'react-redux';
import ColBackground from '../components/Cols/ColBackground';
import Col from '../components/Cols/Col';
import RouteTypes from '../types/RouteTypes';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {CircleButton} from '../components/Buttons/CircleButton';
import Popover from '../components/Popover/Popover';
import CustomBottomSheet from '../components/BottomSheet/CustomBottomSheet';

export default function Roles(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [roles, setRoles] = useState(['Kesim', 'Terzi', 'Yıkama', 'Temizlik']);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const handleAddUser = (data: string) => {
    props.navigation.navigate(RouteTypes.ADD_USER_SCREEN, {roleName: data});
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
            label={I18n.t('rolesscreen_title', {locale: language})}
          />
        </View>

        <View style={{marginTop: 30}}>
          <ColBackground>
            {roles.map((role, index) => (
              <Col
                key={index}
                onPress={() => {
                  handleAddUser(role);
                }}
                name={role}
                icon={
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#D8B267"
                    size={25}
                  />
                }
              />
            ))}
          </ColBackground>
        </View>
      </SafeAreaView>
      <CircleButton
        onPress={() => {
          setAddBottomSheetShow(true);
        }}
        icon={faPlus}
      />
      <CustomBottomSheet
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}>
        <View></View>
      </CustomBottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  popoverHeader: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
