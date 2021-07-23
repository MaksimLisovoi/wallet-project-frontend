import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import s from './styles/base.module.css';
import Container from './components/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import Spinner from './components/Spinner/Spinner';
import { isLoading } from './redux/global/global-selectors';

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
  const Loading = useSelector(isLoading);
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  console.log(Loading);
  return (
    <Container>
      <div className={s.container}>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute path="/register" restricted redirectTo="/home">
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/home">
              <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/" redirectTo="/login">
              <HomePageView />
            </PrivateRoute>
            <PrivateRoute path="/home" redirectTo="/login">
              <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path="/diagram" redirectTo="/login">
              <DiagramView />
            </PrivateRoute>
            <PrivateRoute path="/currency" redirectTo="/login">
              <CurrencyView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}
