import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={styles.user_menu_container}>
      <span className={styles.user_name}>Имя</span>
      <span className={styles.user_name_2}>|</span>
      <button className={styles.out_icon} type="button"></button>
      <span className={styles.user_out}>Выйти</span>
    </div>
  );
};

export default UserMenu;
