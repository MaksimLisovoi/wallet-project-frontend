import React from 'react';
import { connect } from 'react-redux';
// import Navigation from './Navigation';
// import UserMenu from './UserMenu/UserMenu';
// import AuthNav from './AuthNav';
import LoginPage from '../pages/views/login/LoginPage';
import RegisterPage from '../pages/views/registration/RegisterPage';
import { authSelectors } from '../redux/auth';
// import { authSelectors } from "../redux/auth";

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    {/* <Navigation /> */}
    {isAuthenticated ? <LoginPage /> : <RegisterPage />}
  </header>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getisAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
