import React, {useContext, useEffect, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResult/SearchResult';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import FilterSvg from '../svg/FilterSvg';
import {useSelector} from 'react-redux';
import {AppState} from '../store';
export default function Fabric(props: any) {
  const {language} = useSelector((state: AppState) => state.app);
  const [opacity] = useState(new Animated.Value(0));
  const [pageAnimation] = useState(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const Section = () => {
    return (
      <View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Label
            font="Raleway-Bold"
            sx={{fontSize: 15, color: '#5F5E70'}}
            label={I18n.t('fabricsscreen_title', {locale: language})}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <FilterSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
      }}>
      <Header
        pageAnimation={pageAnimation}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        opacity={opacity}
        navigation={props.navigation}
      />
      {isFocused ? <SearchResults opacity={opacity} /> : <Section />}
    </SafeAreaView>
  );
}
