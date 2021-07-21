import axios from 'axios';
import * as actions from './global-action';

axios.defaults.baseURL = 'https://wallet-team-project.herokuapp.com';

export const fetchTransactions = () => dispatch => {
  dispatch(actions.fetchTransactionsRequest());

  axios
    .get('/transactions?sortByDesc=date&limit=200')
    .then(({ data }) => dispatch(actions.fetchTransactionsSuccess(data)))
    .catch(error => dispatch(actions.fetchTransactionsError(error.message)));
};

export const fetchBalance = () => dispatch => {
  dispatch(actions.fetchBalanceRequest());

  axios
    .get('/transactions/balance')
    .then(({ data }) => dispatch(actions.fetchBalanceSuccess(data.data)))
    .catch(error => dispatch(actions.fetchBalanceError(error.message)));
};

export const fetchStatictic =
  ({ month, year }) =>
  async dispatch => {
    if (month && year) {
      dispatch(actions.fetchStaticticRequest());
      axios
        .get(`/transactions/statistic?month=${month}&year=${year}`)
        .then(({ data }) => {
          dispatch(actions.fetchStaticticSuccess(data.data));
          dispatch(actions.errorUnset(false));
        })
        .catch(error => {
          dispatch(actions.fetchStaticticError(error));
          dispatch(actions.statisticUnset());
        });
    }
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
