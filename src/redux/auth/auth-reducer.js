import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authAction from './auth-action';

const initialUserState = {
  name: null,
  email: null,
  password: null,
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
  [authAction.getCurrentUserSuccess]: () => true,
  [authAction.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
