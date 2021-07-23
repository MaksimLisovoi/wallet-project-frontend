import React from 'react';
import styles from './styles.module.css';
import dateFormat from 'dateformat';

const HomeTabItem = ({ transaction }) => {
  const { date, type, category, comments, sum, balance } = transaction;

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
      </tr>
    </>
  );
};

export default HomeTabItem;
