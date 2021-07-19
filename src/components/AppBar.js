import React from 'react';
import { useSelector } from 'react-redux';
// import Navigation from './Navigation';

import LoginPage from '../pages/views/login/LoginPage';
import { getisAuthenticated } from '../redux/auth/auth-selectors';
import DashboardPage from '../pages/views/dashboard/DashboardPage';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getisAuthenticated);

  return (
    <div>
      {/* <Navigation /> */}
      {/* if({isLoggedIn}){<DashboardPage />}
      else {<LoginPage />} */}
      {isLoggedIn ? <DashboardPage /> : <LoginPage />}
    </div>
  );
}
