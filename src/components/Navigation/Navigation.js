import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { getisAuthenticated } from '../../redux/auth/auth-selectors';

import LoginPage from '../../pages/views/login/LoginPage';
import DiagramTab from '../DiagramTab/DiagramTab';

// import { useSelector } from 'react-redux';
// import { getIsAuth } from '../../redux/auth/auth-selectors';
// import LoginPage from '../../pages/views/login/LoginPage';

import style from './Navigation.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000;',
  },
};

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

      {/* {isAuthenticated && (
          <NavLink
            to="/home"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            <svg className={style.logoHome} height="38" width="38">
              <use href="#home"></use>
            </svg>
            {isDesktopOrLaptop && <span>Главная</span>}
          </NavLink>
        ) && (
          <NavLink
            to="/diagram"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            <svg className={style.logoStatistic} height="38" width="38">
              <use href="#statistic"></use>
            </svg>
            {isDesktopOrLaptop && <span> Статистика</span>}
          </NavLink>
        ) && (
          <NavLink
            to="/currency"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            {!isDesktopOrLaptop && (
              <svg className={style.logoCurrency} height="38" width="38">
                <use href="#currency"></use>
              </svg>
            )}
          </NavLink>
        )} */}

      <NavLink
        to="/home"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <svg className={style.logoHome} height="38" width="38">
          <use href="#home"></use>
        </svg>
        {isDesktopOrLaptop && <span>Главная</span>}
      </NavLink>

      <NavLink
        to="/diagram"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <svg className={style.logoStatistic} height="38" width="38">
          <use href="#statistic"></use>
        </svg>
        {isDesktopOrLaptop && <span> Статистика</span>}
      </NavLink>

      <NavLink
        to="/currency"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {!isDesktopOrLaptop && (
          <svg className={style.logoCurrency} height="38" width="38">
            <use href="#currency"></use>
          </svg>
        )}
      </NavLink>
    </nav>
  );
}
