import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import SearchSvg from '../../Svg/SearchSvg';
import I18n from '../../lang/_i18n';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
interface SearchBarProps extends TextInputProps {
  sx?: StyleProp<ViewStyle>;
  inputStyleProps?: StyleProp<TextStyle>;
}
export default function SearchBar(props: SearchBarProps) {
  const {language} = useSelector((state: AppState) => state.app);
  return (
    <View
      style={{
        marginLeft: 20,
        ...(props.sx && typeof props.sx === 'object' ? props.sx : {}),
      }}>
      <View style={{position: 'absolute', zIndex: 10, left: 18, top: 12}}>
        <SearchSvg />
      </View>
      <TextInput
        {...props}
        autoFocus={false}
        placeholderTextColor={'#999999'}
        placeholder={I18n.t('homescreen_search_placeholder', {
          locale: language,
        })}
        style={{
          ...(props.inputStyleProps && typeof props.inputStyleProps === 'object'
            ? props.inputStyleProps
            : {}),
          backgroundColor: '#fff',
          borderColor: '#F2F2F2',
          borderWidth: 1,
          borderRadius: 40,
          height: 40,
          fontWeight: 'bold',
          fontSize: 13,
          color: '#999999',
          paddingHorizontal: 43,
          paddingVertical: 6,
        }}
      />
    </View>
  );
}