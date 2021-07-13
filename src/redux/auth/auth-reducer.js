import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-action';


const initialUserState = {
  name: null,
  email: null,
  password: null,
};


const user = createReducer(initialUserState, {
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
// console.log(user());
const token = createReducer(null, {});

const error = createReducer(null, {
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuth = createReducer(false, {
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
