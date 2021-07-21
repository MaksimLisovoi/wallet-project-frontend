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
  errorUnset,
  statisticUnset,
  addNewTransactionRequest,
  addNewTransactionSuccess,
  addNewTransactionError,
  isModalLogoutOpen,
  isModalLogoutClose,
  isModalAddTransactionOpen,
  isModalAddTransactionClose,
  valueSelect,
} from './global-action';

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
  [statisticUnset]: () => [],
});

const inicialValueDate = {
  month:
    Number.parseInt(
      new Date()
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('-')
        .slice(5, 7),
    ) - 1,
  year: new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-')
    .slice(0, 4),
};

const statisticDateReducer = createReducer(inicialValueDate, {
  [valueSelect]: (state, { payload }) => ({ ...state, ...payload }),
});

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
  [isModalLogoutClose]: () => false,
});

const modalAddTransactionOpenReducer = createReducer(false, {
  [isModalAddTransactionOpen]: () => true,
  [isModalAddTransactionClose]: () => false,
});

const errorReducer = createReducer(false, {
  [fetchTransactionsError]: (_, { payload }) => payload,
  [addNewTransactionError]: (_, { payload }) => payload,
  [fetchBalanceError]: (_, { payload }) => payload,
  [fetchStaticticError]: (_, { payload }) => payload,
  [errorUnset]: () => false,
});

export default combineReducers({
  data: transactionsReducer,
  totalBalance: balanceReducer,
  getStatictic: getStaticticReducer,
  statisticDate: statisticDateReducer,
  isLoading: loadingReducer,
  isModalLogoutOpen: modalLogoutOpenReducer,
  isModalAddTransactionOpen: modalAddTransactionOpenReducer,
  error: errorReducer,
});
