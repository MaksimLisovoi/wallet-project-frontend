import React from 'react';
import styles from './styles.module.css';
import dateFormat from 'dateformat';
import RedTrashIcon from '../HomeTabItem/RedTrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  fetchBalance,
  fetchStatictic,
} from '../../redux/global/global-operation';
import { statisticDate } from '../../redux/global/global-selectors';
//! Мои добавления =============================================================

const MobileHomeTabItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const dateStatistic = useSelector(statisticDate);
  const { date, type, category, comments, sum, balance, _id } = transaction;

  const formatedDate = dateFormat(date, 'dd.mm.yy');

  const sumStyle = [styles.tsum];
  const wrapperStyle = [styles.table__wrapper];
  let modernType = '+';

  if (type === 'minus') {
    sumStyle.push(styles.expense);
    wrapperStyle.push(styles.expense);
    modernType = '-';
  }
  const deleteContact = async id => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchStatictic(dateStatistic));
    await dispatch(fetchBalance());
  };

  return (
    <>
      <div className={wrapperStyle.join(' ')}>
        <table cellPadding="10" cellSpacing="20" className={styles.table}>
          <tbody>
            <tr className={styles.trow}>
              <td className={styles.thead}>Дата</td>
              <td className={styles.tdata}>{formatedDate}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Тип</td>
              <td className={styles.tdata}>{modernType}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Категория</td>
              <td className={styles.tdata}>{category}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Комментарий</td>
              <td className={styles.tdata}>{comments}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Сумма</td>
              <td className={sumStyle.join(' ')}>{sum}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Баланс</td>
              <td className={styles.tdata}>{balance}</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.thead}>Удалить</td>
              <td className={styles.theadIcon}>
                <button
                  onClick={() => deleteContact(_id)}
                  className={styles.btn}
                >
                  <RedTrashIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MobileHomeTabItem;
