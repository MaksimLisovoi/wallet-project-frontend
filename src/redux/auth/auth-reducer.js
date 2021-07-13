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
});
// console.log(user());
const token = createReducer(null, {});

const error = createReducer(null, {
  [authAction.getCurrentUserError]: (_, { payload }) => payload,
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
