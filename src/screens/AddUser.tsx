import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../components/Container/Container';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../components/Text/Label';
import {faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import I18n from 'i18n-js';
import {AppState} from '../store';
import {useSelector} from 'react-redux';
import {CircleButton} from '../components/Buttons/CircleButton';

export default function AddUser(props: any) {
  const {roleName} = props.route.params;
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <Container>
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
            label={roleName + ' Kullanıcıları'}
          />
        </View>
      </SafeAreaView>
      <CircleButton icon={faPlus} />
    </Container>
  );
}
