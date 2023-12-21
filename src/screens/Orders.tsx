import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import SearchBar from '../components/SearchBar/SearchBar';
import {AppState} from '../store';
import {useSelector} from 'react-redux';
import OrderCard from '../components/OrderCard/OrderCard';
import {CircleButton} from '../components/Buttons/CircleButton';
import CustomBottomSheet from '../components/BottomSheet/CustomBottomSheet';

export default function Orders(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <SafeAreaView style={{marginHorizontal: 20, marginBottom: 20}}>
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
      <View style={{margin: 10}}>
        <OrderCard width="100%" />
      </View>
      <CircleButton
        onPress={() => {
          setAddBottomSheetShow(true);
        }}
        icon={faPlus}
      />
      <CustomBottomSheet
        snapPoints={['50%', '70%', '90%']}
        handleClose={(value: boolean) => {
          setAddBottomSheetShow(value);
        }}
        isOpen={addBottomSheetShow}></CustomBottomSheet>
    </View>
  );
}
