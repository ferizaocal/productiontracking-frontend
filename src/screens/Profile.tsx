import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
import {CircleButton} from '../components/Buttons/CircleButton';
import CustomBottomSheet from '../components/BottomSheet/CustomBottomSheet';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../components/Buttons/Default';
export default function Profile(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [addBottomSheetShow, setAddBottomSheetShow] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Burada form bilgilerini kullanabilir ve kaydetme işlemini gerçekleştirebilirsin.
    console.log('Ad Soyad:', fullName);
    console.log('E-posta:', email);
    console.log('Şifre:', password);
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
            label={I18n.t('profilescreen_title', {locale: language})}
          />
        </View>
      </SafeAreaView>
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
        isOpen={addBottomSheetShow}>
        <View style={styles.container}>
          <Text>Ad Soyad:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setFullName(text)}
            value={fullName}
          />

          <Text>E-posta:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />

          <Text>Şifre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />

          <Button label={'KAYDET'} onPress={handleSave} />
        </View>
      </CustomBottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
