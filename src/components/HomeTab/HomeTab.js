import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import GetTableScreen from '../../helpers/getTableScreen';
import getSortedData from '../../helpers/getSortedData';
import TabletHomeTabItem from '../HomeTabItem/TabletHomeTabItem';
import MobileHomeTabItem from '../HomeTabItem/MobileHomeTabItem';
import NoTransactions from '../HomeTabItem/NoTransactions';
import styles from './styles.module.css';
import { getAllTransactions } from '../../redux/global/global-selectors';
import { fetchTransactions } from '../../redux/global/global-operation';

// import transactions from './data';

const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const transactions = useSelector(getAllTransactions);
  const tableScreen = GetTableScreen();

  const sortedData = transactions.sort(getSortedData);

  return (
    <>
      {sortedData.length === 0 ? (
        <NoTransactions />
      ) : (
        <>
          {tableScreen <= 767 && (
            <ul className={styles.list}>
              {sortedData.map(transaction => (
                <li className={styles.item} key={transaction._id.$oid}>
                  <MobileHomeTabItem transaction={transaction} />
                </li>
              ))}
            </ul>
          )}
          {tableScreen >= 767 && (
            <div className={styles.table__wrapper}>
              <table cellPadding="16" className={styles.table}>
                <thead className={styles.thead}>
                  <tr className={styles.trow}>
                    <th className={styles.th}>Дата</th>
                    <th className={styles.th}>Тип</th>
                    <th className={styles.th}>Категория</th>
                    <th className={styles.th}>Комментарий</th>
                    <th className={styles.th}>Сумма</th>
                    <th className={styles.th}>Баланс</th>
                  </tr>
                </thead>

                <tbody>
                  {sortedData.map(transaction => (
                    <TabletHomeTabItem
                      transaction={transaction}
                      key={transaction._id.$oid}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
      {/* 
      {tableScreen <= 767 && (
        <ul className={styles.list}>
          {sortedData.map(transaction => (
            <li className={styles.item} key={transaction._id.$oid}>
              <MobileHomeTabItem transaction={transaction} />
            </li>
          ))}
        </ul>
      )}

      {tableScreen >= 767 && (
        <div className={styles.table__wrapper}>
          <table cellPadding="16" className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trow}>
                <th className={styles.th}>Дата</th>
                <th className={styles.th}>Тип</th>
                <th className={styles.th}>Категория</th>
                <th className={styles.th}>Комментарий</th>
                <th className={styles.th}>Сумма</th>
                <th className={styles.th}>Баланс</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map(transaction => (
                <TabletHomeTabItem
                  transaction={transaction}
                  key={transaction._id.$oid}
                />
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </>
  );
};

export default HomeTab;

HomeTab.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({ $oid: PropTypes.string.isRequired }),
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      sum: PropTypes.string.isRequired,
      balance: PropTypes.string.isRequired,
    }),
  ),
};
