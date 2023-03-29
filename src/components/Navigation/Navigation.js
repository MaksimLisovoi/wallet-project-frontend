import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
// import { getisAuthenticated } from '../../redux/auth/auth-selectors';

// import LoginPage from '../../pages/views/login/LoginPage';

// import { useSelector } from 'react-redux';
// import { getIsAuth } from '../../redux/auth/auth-selectors';
// import LoginPage from '../../pages/views/login/LoginPage';

import style from './Navigation.module.css';

export default function Navigation() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  // const isAuthenticated = useSelector(getisAuthenticated);
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
        // className={style.link}
        // activeclassname={style.activeLink}
        className={({ isActive }) => {
          const linkClasses = [style.link];
          if (isActive) linkClasses.push(style.active);

          return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
        }}
      >
        <svg className={style.logoHome}>
          <use href="#home"></use>
        </svg>
        {isDesktopOrLaptop && (
          <span className={style.activeLinkText}>Главная</span>
        )}
      </NavLink>

      <NavLink
        to="/diagram"
        className={({ isActive }) => {
          const linkClasses = [style.link];
          if (isActive) linkClasses.push(style.active);

          return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
        }}
      >
        <svg className={style.logoStatistic}>
          <use href="#statistic"></use>
        </svg>
        {isDesktopOrLaptop && (
          <span className={style.activeLinkText}> Статистика</span>
        )}
      </NavLink>

      {!isDesktopOrLaptop && (
        <NavLink
          to="/currency"
          className={({ isActive }) => {
            const linkClasses = [style.link];
            if (isActive) linkClasses.push(style.active);

            return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
          }}
        >
          <svg className={style.logoCurrency}>
            <use href="#currency"></use>
          </svg>
        </NavLink>
      )}
    </nav>
  );
}
