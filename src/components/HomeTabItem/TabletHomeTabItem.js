import React, { useCallback } from 'react';
import styles from './styles.module.css';
import dateFormat from 'dateformat';

import { useDispatch, useSelector } from 'react-redux';
// import {
//   deleteTransaction,
//   fetchBalance,
//   fetchStatictic,
// } from '../../redux/global/global-operation';
import App from './DeleteTransactionModal';
import { statisticDate } from '../../redux/global/global-selectors';

const HomeTabItem = ({ transaction }) => {
  const { date, type, category, comments, sum, balance, _id } = transaction;

  const formatedDate = dateFormat(date, 'dd.mm.yy');
  const sumStyle = [styles.td__sum];
  let modernType = '+';

  if (type === 'minus') {
    sumStyle.push(styles.expense);
    modernType = '-';
  }

  return (
    <>
      <tr className={styles.tablet__row}>
        <td className={styles.td__date}>{formatedDate}</td>
        <td className={styles.td__tablet}>{modernType}</td>
        <td className={styles.td__tablet}>{category}</td>
        <td className={styles.td__tablet}>{comments}</td>
        <td className={sumStyle.join(' ')}>{sum}</td>
        <td className={styles.td__tablet}>{balance}</td>
        <td className={styles.td__tablet}>
          <div>
            <App transaction={transaction} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default HomeTabItem;
