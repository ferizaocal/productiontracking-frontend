import useColorScheme from './colorScheme';

const Colors = {
  light: {
    primary: '#87575c',
    textColor: '#87575c',
    headerColor: '#D7C9BC',
    menuBackground: '#d1dfbb',
    headerBackground: '#d1dfbb',
    menuIcon: '#87575c',
    addButton: '#87575c',
    saveButton: '#87575c',
    backgroundColor: 'f0ebe5',
    loadingColor: '#87575c',
    iconColor: '#87575c',
    borderColor: '#C9C9C9',
    inputColor: '#5F5E70',
  },
  dark: {
    primary: '#87575c',
    textColor: '#87575c',
    headerColor: '#D7C9BC',
    menuBackground: '#d1dfbb',
    headerBackground: '#d1dfbb',
    menuIcon: '#87575c',
    addButton: '#87575c',
    saveButton: '#87575c',
    backgroundColor: 'f0ebe5',
    loadingColor: '#87575c',
    iconColor: '#87575c',
    borderColor: '#C9C9C9',
    inputColor: '#5F5E70',
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  return colors;
};

export default useThemeColors;
