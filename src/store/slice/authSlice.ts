import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../AuthState';
import LoginResponse from '../../DTO/Response/LoginResponse';

const INITIAL_STATE: AuthState = {
  user: {} as LoginResponse,
  firebaseToken: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFirebaseToken: (state, action) => {
      state.firebaseToken = action.payload;
    },
  },
});
const AuthReducer = authSlice.reducer;
export default AuthReducer;
export const AuthActions = authSlice.actions;
