import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResult/SearchResult';
import Label from '../components/Text/Label';
import FilterSvg from '../Svg/FilterSvg';
import I18n from '../lang/_i18n';
import {AppState} from '../store';
import {useSelector} from 'react-redux';
export default function Product(props: any) {
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
            sx={{fontSize: 15, color: '#5f5e70'}}
            label={I18n.t('productscreen_title', {locale: language})}
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
      style={{backgroundColor: '#f5f5f5', flex: 1, marginHorizontal: 20}}>
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
