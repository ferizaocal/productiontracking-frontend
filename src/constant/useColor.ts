import useColorScheme from './colorScheme';

const Colors = {
  light: {
    headerColor: '#D7C9BC',
  },
  dark: {
    headerColor: '#D7C9BC',
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  return colors;
};

export default useThemeColors;
