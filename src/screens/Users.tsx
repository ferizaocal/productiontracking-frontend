import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import {faAngleRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';

import {AppState} from '../store';
import {useSelector} from 'react-redux';
import ColTitle from '../components/Cols/ColTitle';
import ColBackground from '../components/Cols/ColBackground';
import Col from '../components/Cols/Col';
export default function Users(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [users, setUsers] = useState(['Kesim', 'Terzi', 'Yıkama', 'Temizlik']);
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
            label={I18n.t('usersscreen_title', {locale: language})}
          />
        </View>
        {/* üsten boşluk vermek için view oluşturdum */}
        <View style={{marginTop: 30}}>
          {users.map((user, index) => (
            <ColBackground key={index}>
              <Col
                name={user}
                icon={
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#D8B267"
                    size={25}
                  />
                }
              />
            </ColBackground>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}
