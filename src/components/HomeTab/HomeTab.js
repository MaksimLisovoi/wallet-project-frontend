import React from 'react';
import PropTypes from 'prop-types';
import GetTableScreen from '../../helpers/getTableScreen';
import getSortedData from '../../helpers/getSortedData';
import TabletHomeTabItem from '../HomeTabItem/TabletHomeTabItem';
import MobileHomeTabItem from '../HomeTabItem/MobileHomeTabItem';
import styles from './styles.module.css';
import transactions from './data';

const HomeTab = () => {
  const tableScreen = GetTableScreen();

  const sortedData = transactions.sort(getSortedData);

  return (
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
      ,
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
