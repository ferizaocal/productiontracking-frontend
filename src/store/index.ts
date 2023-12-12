import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './slice/appSlice';
import {AppSettingsState} from './AppSettingsState';
import persistReducer from 'redux-persist/es/persistReducer';
import {AuthState} from './AuthState';
import AuthReducer from './slice/authSlice';

export interface AppState {
  app: AppSettingsState;
  auth: AuthState;
}
export const Config = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['user'],
};

const rootReducer = combineReducers<AppState>({
  app: persistReducer(Config, AppReducer),
  auth: persistReducer(Config, AuthReducer),
} as any);
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default rootReducer;
