import React from 'react';
import Logos from '../Logos/Logos';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logos />
      <UserMenu />
    </header>
  );
};

export default Header;
