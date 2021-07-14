import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './styles/base.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOps from './redux/auth/auth-operations';
// import ProtectedRoute from './components/ProtectedRoute';

import BtnAddTransc from './components/BtnAddTransc/BtnAddTransc';

// import Spinner from './components/Spinner';

const RegisterPage = lazy(() =>
  import('./pages/views/registration/RegisterPage'),
);
const LoginPage = lazy(() => import('./pages/views/login/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOps.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className={s.container}>
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />

            {/* <ProtectedRoute path="/dashboard">
              <DashboardPage />
            </ProtectedRoute> */}

            <BtnAddTransc />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
