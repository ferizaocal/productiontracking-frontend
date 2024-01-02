import {View, Text} from 'react-native';
import React from 'react';
import Label from '../../components/Text/Label';

import OrderCreateSvg from '../../svg/OrderCreateSvg';
import FabricSvg from '../../svg/FabricSvg';
import ProductionTrackingSvg from '../../svg/ProductionTrackingSvg';
import I18n from '../../lang/_i18n';
import QuickWidget from './QuickWidget';
import {AppState} from '../../store';
import {useSelector} from 'react-redux';
import useThemeColors from '../../constant/useColor';

export default function QuickActions() {
  const {language} = useSelector((state: AppState) => state.app);

  return (
    <View>
      <Label
        font="Raleway-Bold"
        sx={{fontSize: 15, color: '#5F5E70', marginTop: 15}}
        label={I18n.t('homescreen_quicktitle', {locale: language})}
      />
      <View
        style={{
          marginTop: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <QuickWidget
          icon={<OrderCreateSvg />}
          label={I18n.t('homescreen_quick1', {locale: language})}
        />
        <QuickWidget
          icon={<FabricSvg />}
          label={I18n.t('homescreen_quick2', {locale: language})}
        />
        <QuickWidget
          icon={<ProductionTrackingSvg />}
          label={I18n.t('homescreen_quick3', {locale: language})}
        />
      </View>
    </View>
  );
}
