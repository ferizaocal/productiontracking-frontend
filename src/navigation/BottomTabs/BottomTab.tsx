import React, {useContext, useEffect, useRef, useState} from 'react';
import Home from '../../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import HomeSvg from '../../Svg/HomeSvg';
import FabricSvg from '../../Svg/FabricSvg';
import ProductionTrackingSvg from '../../Svg/ProductionTrackingSvg';
import JacketSvg from '../../Svg/Clothes/JacketSvg';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacityProps,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import TshirtSvg from '../../Svg/Clothes/TshirtSvg';
import Label from '../../components/Text/Label';
import BabyPijamaSvg from '../../Svg/Clothes/BabyPijamaSvg';
import JeansPantsSvg from '../../Svg/Clothes/JeansPantsSvg';
import ScarfSvg from '../../Svg/Clothes/ScarfSvg';
import ShirtSvg from '../../Svg/Clothes/ShirtSvg';
import ShortPantsSvg from '../../Svg/Clothes/ShortPantsSvg';
import SkirtSvg from '../../Svg/Clothes/SkirtSvg';
import RouteTypes from '../../types/RouteTypes';
import Product from '../../screens/Product';
import ProductionTracking from '../../screens/ProductionTracking';
import Fabric from '../../screens/Fabric';
import useThemeColors from '../../constant/useColor';
import I18n from '../../lang/_i18n';
import Popover from '../../components/Popover/Popover';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import QuestionMarkSvg from '../../Svg/QuestionMarkSvg';
import {AppActions} from '../../store/slice/appSlice';

const Tab = createBottomTabNavigator();
const Clothes = ({language}: {language: string}) => [
  {icon: (props?: any) => <BabyPijamaSvg {...props} />, label: 'Bebek Pijama'},
  {icon: (props?: any) => <JacketSvg {...props} />, label: 'Ceket'},
  {icon: (props?: any) => <JeansPantsSvg {...props} />, label: 'Pantolon'},
  {icon: (props?: any) => <ScarfSvg {...props} />, label: 'Atkı'},
  {icon: (props?: any) => <ShirtSvg {...props} />, label: 'Gömlek'},
  {icon: (props?: any) => <ShortPantsSvg {...props} />, label: 'Şort'},
  {icon: (props?: any) => <SkirtSvg {...props} />, label: 'Etek'},
  {icon: (props?: any) => <TshirtSvg {...props} />, label: 'Tişört'},
];

export default function BottomTab() {
  const dispatch = useDispatch();
  const {production, language} = useSelector((state: AppState) => state.app);
  var popoverRef = useRef<any>(null);
  const handleOpenPopover = () => {
    if (popoverRef.current) {
      popoverRef.current.openPopover();
    }
  };

  const handleClosePopover = () => {
    if (popoverRef.current) {
      popoverRef.current.closePopover();
    }
  };
  const SelectedProduction = () =>
    Clothes({language}).find(c => c.label === production);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => (
          <CustomTabBar closePopover={handleClosePopover} {...props} />
        )}>
        <Tab.Screen
          options={{
            tabBarIcon: props => <HomeSvg color={props.color} />,
          }}
          name={RouteTypes.HOME_BOTTOM_TAB}
          component={Home}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: props => <FabricSvg color={props.color} />,
          }}
          name={RouteTypes.FABRIC_BOTTOM_TAB}
          component={Fabric}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: props => <ProductionTrackingSvg color={props.color} />,
          }}
          name={RouteTypes.PRODUCTIONTRACKING_BOTTOM_TAB}
          component={ProductionTracking}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: props => {
              if (SelectedProduction && production.length != 0) {
                return SelectedProduction()?.icon({...props});
              } else {
                return <QuestionMarkSvg {...props} />;
              }
            },
          }}
          name={RouteTypes.PRODUCT_BOTTOM_TAB}
          listeners={({navigation, route}) => ({
            tabLongPress: e => {
              handleOpenPopover();
            },
          })}
          component={Product}></Tab.Screen>
      </Tab.Navigator>
      <Popover popoverRef={popoverRef}>
        <View style={styles.popoverHeader}>
          <Label
            font="Raleway-SemiBold"
            sx={{
              fontSize: 16,
              color: '#5F5E70',
            }}
            label={I18n.t('bottomtab_popover_product', {
              locale: language,
            })}></Label>
          <Pressable onPress={() => handleClosePopover()}>
            <Label
              sx={{
                fontSize: 15,
                color: '#5F5E70',
              }}
              label={I18n.t('bottomtab_popover_close', {
                locale: language,
              })}></Label>
          </Pressable>
        </View>
        <View style={styles.popoverItem}>
          {Clothes({language}).map((button, index) => (
            <ProductionButton
              onPress={() => {
                dispatch(AppActions.setProduction(button.label));
              }}
              key={index}
              icon={button.icon({color: '#fff'})}
              label={button.label}
              isActive={button.label === production}
            />
          ))}
        </View>
      </Popover>
    </View>
  );
}
interface ProductionButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: any;
  isActive?: boolean;
}
const ProductionButton = (props: ProductionButtonProps) => {
  const {label, icon, ...rest} = props;

  return (
    <TouchableOpacity
      {...rest}
      style={{
        ...styles.productionButton,
        backgroundColor: props.isActive ? '#D8B267' : '#999',
      }}>
      {icon}
      <Label
        font="Raleway-Bold"
        sx={{
          fontSize: 8,
          color: '#fff',
          marginTop: 5,
        }}
        label={label}></Label>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: Dimensions.get('window').height - 70,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  popoverContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,

    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    padding: 10,
    elevation: 5,
    zIndex: 100,
  },
  popoverHeader: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popoverItem: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productionButton: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#D8B267',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
});
