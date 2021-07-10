import React from 'react';
import styles from './Logos.module.css';

const Logos = () => {
  return (
    <div className={styles.logo_container}>
      <div className={styles.logoname}>Wallet</div>
  <span className={styles.logo}></span>
    </div>
  );
};

export default Logos;
