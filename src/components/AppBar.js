import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/views/login/LoginPage';
import { getisAuthenticated } from '../redux/auth/auth-selectors';
import DashboardPage from '../pages/views/dashboard/DashboardPage';

export default function AppBar() {
  const isLoggedIn = useSelector(getisAuthenticated);

  return <div>{isLoggedIn ? <DashboardPage /> : <LoginPage />}</div>;
}
