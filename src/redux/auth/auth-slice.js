import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import * as authActions from './auth-action';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialUserState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialUserState,
  extraReducers: {
    [register.pending]: (state, _) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logIn.pending]: (state, _) => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

// const user = createReducer(initialUserState, {
//   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data,
//   [authActions.registerSuccess]: (_, { payload }) => payload.data,
//   [authActions.loginSuccess]: (_, { payload }) => payload.user,

//   [authActions.logoutSuccess]: () => initialUserState,
// });
// // console.log(user());
// const token = createReducer(null, {
//   [authActions.loginSuccess]: (_, { payload }) => payload.token,
//   [authActions.logoutSuccess]: () => null,
// });

// const setError = (_, { payload }) => payload;

// const error = createReducer(null, {
//   [authActions.getCurrentUserError]: setError,
//   [authActions.logoutError]: setError,
//   [authActions.getCurrentUserError]: setError,
//   [authActions.registerError]: setError,
// });

// const isAuthenticated = createReducer(false, {
//   // [authActions.registerSuccess]: () => true,
//   [authActions.loginSuccess]: () => true,
//   [authActions.getCurrentUserSuccess]: () => true,
//   [authActions.registerError]: () => false,
//   [authActions.loginError]: () => false,
//   [authActions.getCurrentUserError]: () => false,
//   [authActions.logoutSuccess]: () => false,
// });

// export default combineReducers({
//   user,
//   token,
//   error,
//   isAuthenticated,
// });
