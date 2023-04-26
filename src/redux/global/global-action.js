import { createAction } from '@reduxjs/toolkit';

// --- Екшены на получение всех транзакций
export const fetchTransactionsRequest = createAction(
  'global/fetchTransactionsRequest',
);
export const fetchTransactionsSuccess = createAction(
  'global/fetchTransactionsSuccess',
);
export const fetchTransactionsError = createAction(
  'global/fetchTransactionsError',
);

// --- Екшены на получение баланса
export const fetchBalanceRequest = createAction('global/fetchBalanceRequest');
export const fetchBalanceSuccess = createAction('global/fetchBalanceSuccess');
export const fetchBalanceError = createAction('global/fetchBalanceError');

// --- Екшены на получение транзакций за определенный период
export const fetchStaticticRequest = createAction(
  'global/fetchStaticticRequest',
);
export const fetchStaticticSuccess = createAction(
  'global/fetchStaticticSuccess',
);
export const fetchStaticticError = createAction('global/fetchStaticticError');
export const errorUnset = createAction('global/errorUnset');
export const statisticUnset = createAction('global/statisticUnset');

// --- Екшены на добавление транзакции
export const addNewTransactionRequest = createAction(
  'global/addNewTransactionRequest',
);
export const addNewTransactionSuccess = createAction(
  'global/addNewTransactionSuccess',
);
export const addNewTransactionError = createAction(
  'global/addNewTransactionError',
);

// --- Екшены на открытие ModalLogout
export const isModalLogoutOpen = createAction('global/isModalLogoutOpen');

// --- Екшены на закрытие ModalLogout
export const isModalLogoutClose = createAction('global/isModalLogoutClose');

// --- Екшены на открытие ModalAddTransaction
export const isModalAddTransactionOpen = createAction(
  'global/isModalAddTransactionOpen',
);

// --- Екшены на закрытие ModalAddTransaction
export const isModalAddTransactionClose = createAction(
  'global/isModalAddTransactionClose',
);

// --- Екшены на взятие value из Select`а
export const valueSelect = createAction('global/valueSelect');

// --- Екшены на удаление
export const deleteRequest = createAction('global/deleteRequest');
export const deleteSuccess = createAction('global/deleteSuccess');
export const deleteError = createAction('global/deleteError');
