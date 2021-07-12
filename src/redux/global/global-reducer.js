import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
  addNewTransactionRequest,
  addNewTransactionSuccess,
  addNewTransactionError,
} from './global-action';

// --- нужно переделать на транзакцию

// const addNew = (state, payload) => {
//   const uniaqueName = state.find(
//     contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//   );
//   if (payload.name === '') {
//     alert('Вы забыли ввести имя контакта');
//   } else if (payload.number === '') {
//     alert('Вы забыли ввести номер контакта');
//   } else if (uniaqueName) {
//     alert(`${payload.name} уже есть в списке`);
//   } else {
//     return [...state, payload];
//   }
// };

const transactionsReducer = createReducer([], {
  [fetchTransactionsSuccess]: (_, { payload }) => payload,
  //   [addNewTransactionSuccess]: (state, { payload }) => addNew(state, payload),
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
});

const balanceReducer = createReducer(0, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});

// тут надо подумать
const modalLogoutOpenReducer = createReducer(false, {
  //   [fetchTransactionsRequest]: () => true,
  //   [fetchTransactionsSuccess]: () => false,
  //   [fetchTransactionsError]: () => false,
  //   [addNewTransactionRequest]: () => true,
  //   [addNewTransactionSuccess]: () => false,
  //   [addNewTransactionError]: () => false,
});

// тут надо подумать
const modalAddTransactionOpenReducer = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSuccess]: () => false,
  [fetchTransactionsError]: () => false,
  [addNewTransactionRequest]: () => true,
  [addNewTransactionSuccess]: () => false,
  [addNewTransactionError]: () => false,
});

const errorReducer = createReducer(false, {
  [fetchTransactionsError]: (_, { payload }) => payload,
  [addNewTransactionError]: (_, { payload }) => payload,
});

export default combineReducers({
  data: transactionsReducer,
  totalBalance: balanceReducer,
  //   filter: filterReducer,
  isLoading: loadingReducer,
  isModalLogoutOpen: modalLogoutOpenReducer,
  isModalAddTransactionOpen: modalAddTransactionOpenReducer,
  error: errorReducer,
});
