import React, { useCallback } from 'react';
import styles from './styles.module.css';
import dateFormat from 'dateformat';
import RedTrashIcon from './RedTrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  fetchBalance,
  fetchStatictic,
} from '../../redux/global/global-operation';
import { statisticDate } from '../../redux/global/global-selectors';

//console.log(deleteTransaction);

const HomeTabItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const dateStatistic = useSelector(statisticDate);
  // console.log(transaction);
  const { date, type, category, comments, sum, balance, _id } = transaction;

  // console.log(_id);
  const formatedDate = dateFormat(date, 'dd.mm.yy');
  const sumStyle = [styles.td__sum];
  let modernType = '+';

  if (type === 'minus') {
    sumStyle.push(styles.expense);
    modernType = '-';
  }
  const deleteContact = async id => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchStatictic(dateStatistic));
    await dispatch(fetchBalance());
  };

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
          <button onClick={() => deleteContact(_id)} className={styles.btn}>
            <RedTrashIcon />
          </button>
        </td>
      </tr>
    </>
  );
};

export default HomeTabItem;
