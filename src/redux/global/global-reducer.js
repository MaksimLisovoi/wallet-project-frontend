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
  isModalLogoutOpen,
  isModalAddTransactionOpen,
} from './global-action';

// --- нужно доделать добавление транзакции

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

const transactionsReducer = createReducer(
  {},
  {
    [fetchTransactionsSuccess]: (_, { payload }) => payload,
    //   [addNewTransactionSuccess]: (state, { payload }) => addNew(state, payload),
  },
);

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

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
});

const modalAddTransactionOpenReducer = createReducer(false, {
  [isModalAddTransactionOpen]: () => true,
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
