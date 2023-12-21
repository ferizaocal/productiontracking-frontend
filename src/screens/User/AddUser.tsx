import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container/Container';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../../components/Text/Label';
import {
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faEdit,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import I18n from 'i18n-js';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
import {CircleButton} from '../../components/Buttons/CircleButton';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import ColBackground from '../../components/Cols/ColBackground';
import RouteTypes from '../../types/RouteTypes';
import Col from '../../components/Cols/Col';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Buttons/Default';

export default function AddUser(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const [users, setUsers] = useState([
    'ali veli',
    'zeynep kara',
    'ayse fatma',
    'mehmet temiz',
  ]);
  const handleAddUser = (data: string) => {
    props.navigation.navigate(RouteTypes.ADD_USER_SCREEN, {userName: data});
  };
  const [userName, setUserName] = useState('');
  const handleSave = () => {
    console.log('Kullanıcı Adı:', userName);
  };
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
            label={'Kullanıcı Ekle'}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginTop: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
  },
});
