import TurkeyFlagSvg from '../Svg/Flags/TurkeyFlagSvg';
import EnglishFlagSvg from '../Svg/Flags/EnglishFlagSvg';
import GermanyFlagSvg from '../Svg/Flags/GermanyFlagSvg';
import I18n from '../lang/_i18n';
import ChinaFlagSvg from '../Svg/Flags/ChinaFlagSvg';

export const SettingList_Production = ({lang}: {lang: string}) => [
  {
    name: I18n.t('settingsscreen_productions', {locale: lang}),
  },
  {
    name: I18n.t('settingsscreen_production_agegroup', {locale: lang}),
  },
];
export const SettingList_Process = ({lang}: {lang: string}) => [
  {
    name: I18n.t('settingsscreen_process', {locale: lang}),
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
