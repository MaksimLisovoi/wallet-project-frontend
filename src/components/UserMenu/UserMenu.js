import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { isModalLogoutOpen } from '../../redux/global/global-action';
import styles from './UserMenu.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const ModalLogoutOpen = () => dispatch(isModalLogoutOpen());

  return (
    <div className={styles.user_menu_container}>
      <span className={styles.user_name}>{name}</span>
      <span className={styles.user_name_2}>|</span>
      <div className={styles.out} onClick={ModalLogoutOpen}>
        <button className={styles.out_icon} type="button"></button>
        <span className={styles.user_out}>Выйти</span>
      </div>
    </div>
  );
}
