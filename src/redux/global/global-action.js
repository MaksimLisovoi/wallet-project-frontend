import { createAction } from '@reduxjs/toolkit';

export const fetchTransactionsRequest = createAction(
  'global/fetchTransactionsRequest',
);
export const fetchTransactionsSuccess = createAction(
  'global/fetchTransactionsSuccess',
);
export const fetchTransactionsError = createAction(
  'global/fetchTransactionsError',
);

export const fetchBalanceRequest = createAction('global/fetchBalanceRequest');
export const fetchBalanceSuccess = createAction('global/fetchBalanceSuccess');
export const fetchBalanceError = createAction('global/fetchBalanceError');

export const addNewTransactionRequest = createAction(
  'global/addNewTransactionRequest',
);
export const addNewTransactionSuccess = createAction(
  'global/addNewTransactionSuccess',
);
export const addNewTransactionError = createAction(
  'global/addNewTransactionError',
);
