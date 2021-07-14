import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-action';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {

  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authAction.logoutSuccess]: () => initialUserState,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
});
// console.log(user());
const token = createReducer(null, {
  [authAction.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authAction.getCurrentUserError]: setError,
  [authAction.logoutError]: setError,
  [authAction.getCurrentUserError]: setError,

});

const isAuth = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
