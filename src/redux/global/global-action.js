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
export const isModalLogoutOpen = createAction('global/getModalLogout');

// --- Екшены на открытие ModalAddTransaction
export const isModalAddTransactionOpen = createAction(
  'global/isModalAddTransactionOpen',
);
