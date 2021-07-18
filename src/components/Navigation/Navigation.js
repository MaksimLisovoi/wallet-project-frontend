import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { getisAuthenticated } from '../../redux/auth/auth-selectors';

// import LoginPage from '../../pages/views/login/LoginPage';

// import { useSelector } from 'react-redux';
// import { getIsAuth } from '../../redux/auth/auth-selectors';
// import LoginPage from '../../pages/views/login/LoginPage';

import style from './Navigation.module.css';

export default function Navigation() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  const isAuthenticated = useSelector(getisAuthenticated);
  return (
    <nav className={style.navigation}>
      {/* <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <LoginPage />
      </NavLink> */}

      <NavLink
        to="/home"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        <svg className={style.logoHome} height="38" width="38">
          <use href="#home"></use>
        </svg>
        {isDesktopOrLaptop && (
          <span className={style.activeLinkText}>Главная</span>
        )}
      </NavLink>

      <NavLink
        to="/diagram"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        <svg className={style.logoStatistic} height="38" width="38">
          <use href="#statistic"></use>
        </svg>
        {isDesktopOrLaptop && (
          <span className={style.activeLinkText}> Статистика</span>
        )}
      </NavLink>

      {!isDesktopOrLaptop && (
        <NavLink
          to="/currency"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          <svg className={style.logoCurrency} height="38" width="38">
            <use href="#currency"></use>
          </svg>
        </NavLink>
      )}
    </nav>
  );
}
