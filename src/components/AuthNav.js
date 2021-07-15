import React from 'react';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import Navigation from './Navigation';
// import UserMenu from './UserMenu/UserMenu';

// import { authSelectors } from '../redux/auth';
// import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>

    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Логин
    </NavLink>
  </div>
);
// const mapStateToProps = state => ({
//   isAuthenticated: getisAuthenticated(state),
// });

export default AuthNav;
