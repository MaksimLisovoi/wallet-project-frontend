import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
  fetchStaticticRequest,
  fetchStaticticSuccess,
  fetchStaticticError,
  addNewTransactionRequest,
  addNewTransactionSuccess,
  addNewTransactionError,
  isModalLogoutOpen,
  isModalAddTransactionOpen,
  isModalLogoutClose,
} from './global-action';

// --- нужно доделать добавление транзакции

const transactionsReducer = createReducer([], {
  [fetchTransactionsSuccess]: (_, { payload }) => payload.data.transactions,
  [addNewTransactionSuccess]: (state, { payload }) => [
    ...state,
    payload.data.transaction,
  ],
});

const loadingReducer = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSuccess]: () => false,
  [fetchTransactionsError]: () => false,
  [addNewTransactionRequest]: () => true,
  [addNewTransactionSuccess]: () => false,
  [addNewTransactionError]: () => false,
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
  [fetchStaticticRequest]: () => true,
  [fetchStaticticSuccess]: () => false,
  [fetchStaticticError]: () => false,
});

const balanceReducer = createReducer(0, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});

const getStaticticReducer = createReducer([], {
  [fetchStaticticSuccess]: (_, { payload }) => payload,
});

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
  [isModalLogoutClose]: () => false,
});

const modalAddTransactionOpenReducer = createReducer(false, {
  [isModalAddTransactionOpen]: () => true,
});

const errorReducer = createReducer(false, {
  [fetchTransactionsError]: (_, { payload }) => payload,
  [addNewTransactionError]: (_, { payload }) => payload,
  [fetchBalanceError]: (_, { payload }) => payload,
  [fetchStaticticError]: (_, { payload }) => payload,
});

export default combineReducers({
  data: transactionsReducer,
  totalBalance: balanceReducer,
  getStatictic: getStaticticReducer,
  isLoading: loadingReducer,
  isModalLogoutOpen: modalLogoutOpenReducer,
  isModalAddTransactionOpen: modalAddTransactionOpenReducer,
  error: errorReducer,
});
