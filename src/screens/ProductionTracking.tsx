import React, {useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResult/SearchResult';
import Button from '../components/Buttons/Default';

import ProductionTrackingCard from '../components/ProductionTrackingCard/ProductionTrackingCard';
import Label from '../components/Text/Label';
import I18n from '../lang/_i18n';
import FilterSvg from '../svg/FilterSvg';
import ListSvg from '../svg/ListSvg';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGripVertical} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import {AppActions} from '../store/slice/appSlice';
import OperationMenu from '../components/OperationMenu/OperationMenu';
import {fetchOperationsByActive} from '../store/slice/operationSlice';
import Container from '../components/Container/Container';

export default function ProductionTracking(props: any) {
  const dispatch = useDispatch<any>();
  const {language} = useSelector((state: AppState) => state.app);
  const {listType} = useSelector((state: AppState) => state.app);
  const operationLoading = useSelector(
    (state: AppState) => state.operation.pageLoading,
  );

  const [opacity] = useState(new Animated.Value(0));
  const [pageAnimation] = useState(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState<boolean>(false);
  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch(fetchOperationsByActive());
    });
  }, []);

  const Section = () => {
    return (
      <View>
        <View style={{marginTop: 15}}>
          <OperationMenu />
        </View>
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
            label={I18n.t('homescreen_trackingtitle', {locale: language})}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  AppActions.setListType(listType === 'grid' ? 'list' : 'grid'),
                );
              }}
              activeOpacity={0.7}
              style={{marginRight: 10}}>
              {listType === 'grid' ? (
                <ListSvg />
              ) : (
                <FontAwesomeIcon color="#5F5E70" icon={faGripVertical} />
              )}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <FilterSvg />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          contentInset={{bottom: 90}}
          style={{zIndex: 3, height: '90%'}}
          contentContainerStyle={{justifyContent: 'space-between'}}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={listType === 'grid' ? 2 : 1}
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ]}
          renderItem={({item}) => <ProductionTrackingCard />}
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: '#F5F5F5', flex: 1, marginHorizontal: 20}}>
      <Header
        pageAnimation={pageAnimation}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        opacity={opacity}
        navigation={props.navigation}
      />
      <Container isLoading={operationLoading}>
        {isFocused ? <SearchResults opacity={opacity} /> : <Section />}
      </Container>
    </SafeAreaView>
  );
}
