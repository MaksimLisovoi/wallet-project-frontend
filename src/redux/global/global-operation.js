import axios from 'axios';
import * as actions from './global-action';

export const fetchTransactions = () => dispatch => {
  dispatch(actions.fetchTransactionsRequest());

  axios.defaults.baseURL = 'https://wallet-team-project.herokuapp.com';

  axios
    .get('/transactions')
    .then(({ data }) => dispatch(actions.fetchTransactionsSuccess(data)))
    .catch(error => dispatch(actions.fetchTransactionsError(error.message)));
};

export const fetchBalance = () => dispatch => {
  dispatch(actions.fetchBalanceRequest());

  axios
    .get('/transactions/balance')
    .then(({ data }) => dispatch(actions.fetchBalanceSuccess(data)))
    .catch(error => dispatch(actions.fetchBalanceError(error.message)));
};

export const fetchStatictic =
  ({ month, year }) =>
  dispatch => {
    dispatch(actions.fetchStaticticRequest());

    axios
      .get(`/transactions/statistic?month=${month}&year=${year}`)
      .then(({ data }) => dispatch(actions.fetchStaticticSuccess(data.data)))
      .catch(error => dispatch(actions.fetchStaticticError(error.message)));
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
    .post('/transactions', newTransaction)
    .then(({ data }) => dispatch(actions.addNewTransactionSuccess(data)))
    .catch(error => dispatch(actions.addNewTransactionError(error.message)));
};
