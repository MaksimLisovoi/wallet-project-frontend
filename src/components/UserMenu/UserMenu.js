import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={styles.user_menu_container}>
      <span className={styles.user_name}>Имя</span>
      <span className={styles.user_name_2}>|</span>
      <NavLink to="/login" className={styles.link}>
        <button className={styles.out_icon} type="button"></button>
        <span className={styles.user_out}>Выйти</span>
      </NavLink>
    </div>
  );
};

export default UserMenu;
