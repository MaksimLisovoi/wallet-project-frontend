import React from 'react';
import styles from './Logos.module.css';

const Logos = () => {
  return (
    <div className={styles.logo_container}>
      <span className={styles.logo}></span>
      <div className={styles.logoname}>Wallet</div>
    </div>
  );
};

export default Logos;
