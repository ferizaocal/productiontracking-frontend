import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
export default function Confirmation(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#D8B267" size={25} />
          </TouchableOpacity>
          <Label
            font="Raleway-Bold"
            sx={{marginLeft: 15, color: '#5f5e70', fontSize: 20}}
            label={I18n.t('confirmationscreen_title', {locale: language})}
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
const styles = StyleSheet.create({
  col: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
