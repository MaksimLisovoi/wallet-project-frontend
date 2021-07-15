import React from 'react';
import styles from './styles.module.css';

const NoTransactions = () => {
  return (
    <div className={styles.text__wrapper}>
      <p className={styles.text}>У Вас пока нет добавленных транзакций</p>
    </div>
  );
};

export default NoTransactions;
