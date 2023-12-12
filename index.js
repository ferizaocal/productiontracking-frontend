/**
 * @format
 */

import {AppRegistry, LogBox, StatusBar, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';

StatusBar.setHidden(true, 'none');
LogBox.ignoreAllLogs();

const AppInit = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppInit);
