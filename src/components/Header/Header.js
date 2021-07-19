import React from 'react';
import Logos from '../Logos/Logos';
import UserMenu from '../UserMenu/UserMenu';
import ModalLogout from '../ModalLogout/ModalLogout';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logos />
      <UserMenu />
      <ModalLogout />
    </header>
  );
}
