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
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.token,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
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
