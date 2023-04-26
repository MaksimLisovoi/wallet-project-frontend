import axios from 'axios';
import * as actions from './global-action';

axios.defaults.baseURL = 'https://wallet-team-project.onrender.com';

export const fetchTransactions = () => async dispatch => {
  dispatch(actions.fetchTransactionsRequest());

  await axios
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
      dispatch(actions.errorUnset(false));
      dispatch(actions.statisticUnset());
      dispatch(actions.fetchStaticticRequest());
      await axios
        .get(`/transactions/statistic?month=${month}&year=${year}`)
        .then(({ data }) => {
          dispatch(actions.fetchStaticticSuccess(data.data));
        })
        .catch(error => {
          dispatch(actions.fetchStaticticError(error));
          // dispatch(actions.statisticUnset());
        });
    }
  };

export const addNewTransaction = transaction => async dispatch => {
  const newTransaction = {
    date: transaction.date,
    type: transaction.type,
    category: transaction.category,
    comments: transaction.comments,
    sum: transaction.sum,
  };

  dispatch(actions.addNewTransactionRequest());

  await axios
    .post('/transactions', newTransaction)
    .then(({ data }) => dispatch(actions.addNewTransactionSuccess(data)))
    .catch(error => dispatch(actions.addNewTransactionError(error.message)));
};

export const deleteTransaction = id => dispatch => {
  dispatch(actions.deleteRequest());
  // console.log(id);
  axios
    .delete(`/transactions/${id}`)
    .then(() => dispatch(actions.deleteSuccess(id)))
    .catch(error => dispatch(actions.deleteError(error.message)));
};
