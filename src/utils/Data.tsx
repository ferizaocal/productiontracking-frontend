import TurkeyFlagSvg from '../svg/Flags/TurkeyFlagSvg';
import EnglishFlagSvg from '../svg/Flags/EnglishFlagSvg';
import GermanyFlagSvg from '../svg/Flags/GermanyFlagSvg';
import I18n from '../lang/_i18n';
import ChinaFlagSvg from '../svg/Flags/ChinaFlagSvg';
import RouteTypes from '../types/RouteTypes';
import BabyPijamaSvg from '../svg/Clothes/BabyPijamaSvg';
import TshirtSvg from '../svg/Clothes/TshirtSvg';
export const SECTIONS = [
  {
    title: 'Kesim',
    data: [
      {
        title: 'Saç Kaynağı',
        price: 30,
        description: '60 DK',
      },
      {
        title: 'Saç Yıkama',
        price: 30,
        description: '20 DK',
      },
      {
        title: 'Saç Boyama',
        price: 30,
        description: '60 DK',
      },
      {
        title: 'Saç Kesimi',
        price: 30,
        description: '30 DK',
      },
      {
        title: 'Saç Bakımı',
        price: 30,
        description: '30 DK',
      },
    ],
  },
  {
    title: 'Yıkama',
    data: [
      {
        title: 'Tırnak Kaynağı',
        price: 30,
        description: '60 DK',
      },
      {
        title: 'Manikür',
        price: 30,
        description: '20 DK',
      },
      {
        title: 'Pedikür',
        price: 30,
        description: '60 DK',
      },
      {
        title: 'Tırnak Bakımı',
        price: 30,
        description: '30 DK',
      },
      {
        title: 'Tırnak Boyama',
        price: 30,
        description: '30 DK',
      },
    ],
  },
];
export const SettingList_Production = ({lang}: {lang: string}) => [
  {
    name: I18n.t('settingsscreen_productions', {locale: lang}),
    route: RouteTypes.PRODUCTIONS_SCREEN,
  },
  {
    name: I18n.t('settingsscreen_production_agegroup', {locale: lang}),
    route: RouteTypes.PRODUCTIONS_SCREEN,
  },
];
export const SettingList_Operations = ({lang}: {lang: string}) => [
  {
    name: I18n.t('settingsscreen_operations', {locale: lang}),
    route: RouteTypes.OPERATIONS_SCREEN,
  },
];
export const SettingList_Language = [
  {
    shortName: 'tr',
    name: 'Türkçe',
    icon: <TurkeyFlagSvg />,
  },
  {
    shortName: 'en',
    name: 'English',
    icon: <EnglishFlagSvg />,
  },
  {
    shortName: 'de',
    name: 'Deutsch',
    icon: <GermanyFlagSvg />,
  },
  {
    shortName: 'zh',
    name: '中文',
    icon: <ChinaFlagSvg />,
  },
];
export const Clothes = [
  {
    name: 'Bebek Pijama',
    iconName: (iconColor?: string) => (
      <BabyPijamaSvg color={iconColor ? iconColor : '#fff'} />
    ),
  },
  {
    name: 'Tişört',
    iconName: (iconColor?: string) => (
      <TshirtSvg color={iconColor ? iconColor : '#fff'} />
    ),
  },
];
export const getFindIconByName = (name: string, iconColor?: string) => {
  return Clothes.find(x => x.name === name)?.iconName(iconColor);
};
