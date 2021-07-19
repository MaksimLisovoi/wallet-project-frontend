import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-action';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data,
  [authActions.registerSuccess]: (_, { payload }) => payload.data,
  [authActions.loginSuccess]: (_, { payload }) => payload.data.user,

  [authActions.logoutSuccess]: () => initialUserState,
});
// console.log(user());
const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.getCurrentUserError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  // [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
