import useColorScheme from './colorScheme';

const Colors = {
  light: {
    headerColor: '#D7C9BC',
    menuBackground: '#d1dfbb',
    headerBackground: '#d1dfbb',
    menuIcon: '#87575c',
    addButton: '#87575c',
    saveButton: '#87575c',
    backgroundColor: 'f0ebe5',
  },
  dark: {
    headerColor: '#D7C9BC',
    menuBackground: '#d1dfbb',
    headerBackground: '#d1dfbb',
    menuIcon: '#87575c',
    addButton: '#87575c',
    saveButton: '#87575c',
    backgroundColor: 'f0ebe5',
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  return colors;
};

export default useThemeColors;
