import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './styles/base.module.css';

import Container from './components/Container';
// import AuthNav from './components/AuthNav';
import AppBar from './components/AppBar';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import Spinner from './components/Spinner/Spinner';

const RegisterPage = lazy(() =>
  import('./pages/views/registration/RegisterPage'),
);
const LoginPage = lazy(() => import('./pages/views/login/LoginPage'));
const DashboardPage = lazy(() =>
  import('./pages/views/dashboard/DashboardPage'),
);
const HomePageView = lazy(() => import('./pages/views/homepage'));
const DiagramView = lazy(() => import('./pages/views/diagram'));
const CurrencyView = lazy(() => import('./pages/views/currency'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.container}>
        {/* <AuthNav /> */}
        {/* <AppBar /> */}

        <Suspense fallback={Spinner}>
          <Switch>
            {/* <PublicRoute exact path="/">
              <LoginPage />
            </PublicRoute> */}
            <PublicRoute path="/register" restricted redirectTo="/dashboard">
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/dashboard">
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/dashboard" redirectTo="/login">
              <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path="/home" redirectTo="/dashboard">
              <HomePageView />
            </PrivateRoute>
            <PrivateRoute path="/diagram" redirectTo="/dashboard">
              <DiagramView />
            </PrivateRoute>
            <PrivateRoute path="/currency" redirectTo="/dashboard">
              <CurrencyView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}
