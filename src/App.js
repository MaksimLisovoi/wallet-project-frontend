import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from './redux/auth/auth-operations';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import Spinner from './components/Spinner/Spinner';
import { getisAuthenticated } from './redux/auth/auth-selectors';
import { Layout } from './components/Layout/Layout';
import { LayoutMain } from './components/Layout/LayoutMain';

const RegisterPage = lazy(() =>
  import('./pages/views/registration/RegisterPage'),
);
const LoginPage = lazy(() => import('./pages/views/login/LoginPage'));
const DashboardPage = lazy(() =>
  import('./pages/views/dashboard/DashboardPage'),
);

const DiagramView = lazy(() => import('./pages/views/diagram'));
const CurrencyView = lazy(() => import('./pages/views/currency'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const isAuth = useSelector(getisAuthenticated);

  return (
    <>
      {/* {isAuth && <Header />} */}
      {/* <div className={s.container}> */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={isAuth ? <LayoutMain /> : <Layout />}>
            <Route index element={<Navigate to="login" />} />
            <Route
              path="register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/home" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/home" />
              }
            />
            <Route
              path="home"
              element={
                <PrivateRoute component={DashboardPage} redirectTo="/login" />
              }
            />
            <Route
              path="diagram"
              element={
                <PrivateRoute component={DiagramView} redirectTo="/login" />
              }
            />
            <Route
              path="currency"
              element={
                <PrivateRoute component={CurrencyView} redirectTo="/login" />
              }
            />
          </Route>
          {/* <Route path="/" element={<LayoutMain />}></Route> */}

          {/* <RestrictedRoute path="/register" restricted redirectTo="/home">
              <RegisterPage />
            </RestrictedRoute> */}
          {/* <PublicRoute path="/login" restricted redirectTo="/home">
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
            </PrivateRoute> */}
        </Routes>
      </Suspense>
      {/* </div> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes> */}
    </>
  );
}
