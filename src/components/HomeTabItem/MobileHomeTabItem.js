import React from 'react';
import styles from './styles.module.css';
import dateFormat from 'dateformat';

const MobileHomeTabItem = ({ transaction }) => {
  const { date, type, category, comments, sum, balance } = transaction;

  const formatedDate = dateFormat(date, 'dd.mm.yy');

  const sumStyle = [styles.tsum];
  const wrapperStyle = [styles.table__wrapper];
  let modernType = '+';

  if (type === 'minus') {
    sumStyle.push(styles.expense);
    wrapperStyle.push(styles.expense);
    modernType = '-';
  }

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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MobileHomeTabItem;
