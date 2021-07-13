import axios from 'axios';
import * as actions from './global-action';

export const fetchTransactions = () => dispatch => {
  dispatch(actions.fetchTransactionsRequest());

  axios
    .get('https://wallet-team-project.herokuapp.com/api/transactions')
    .then(({ data }) => dispatch(actions.fetchTransactionsSuccess(data)))
    .catch(error => dispatch(actions.fetchTransactionsError(error.message)));
};

export const fetchBalance = () => dispatch => {
  dispatch(actions.fetchBalanceRequest());

  axios
    .get('https://wallet-team-project.herokuapp.com/api/transactions/balance')
    .then(({ data }) => dispatch(actions.fetchBalanceSuccess(data)))
    .catch(error => dispatch(actions.fetchBalanceError(error.message)));
};

export const addNewTransaction = transaction => dispatch => {
  const newTransaction = {
    date: transaction.date,
    type: transaction.type,
    category: transaction.category,
    comments: transaction.comments,
    sum: transaction.sum,
  };

  dispatch(actions.addNewTransactionRequest());

  axios
    .post(
      'https://wallet-team-project.herokuapp.com/api/transactions',
      newTransaction,
    )
    .then(({ data }) => dispatch(actions.addNewTransactionSuccess(data)))
    .catch(error => dispatch(actions.addNewTransactionError(error.message)));
};
