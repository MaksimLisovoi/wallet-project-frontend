import React from 'react';
import styles from './Logos.module.css';
import { NavLink } from 'react-router-dom';

const Logos = () => {
  return (
    <>
      <NavLink to="/home" className={styles.logo_container}>
        <span className={styles.logo}></span>
        <div className={styles.logoname}>Wallet</div>
      </NavLink>
    </>

    // <div className={styles.logo_container}>
    //   <span className={styles.logo}></span>
    //   <div className={styles.logoname}>Wallet</div>
    // </div>
  );
};

export default Logos;
