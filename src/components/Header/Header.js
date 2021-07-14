import React from 'react';
import Logos from '../Logos/Logos';
import UserMenu from '../UserMenu/UserMenu';
import ModalLogout from '../ModalLogout/ModalLogout';
import styles from './Header.module.css';
import { getModalLogout } from '../../redux/global/global-selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const modalLogout = useSelector(getModalLogout);

  return (
    <header className={styles.header}>
      <Logos />
      <UserMenu />
      {modalLogout && <ModalLogout />}
    </header>
  );
};

export default Header;
