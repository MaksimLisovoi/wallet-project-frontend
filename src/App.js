import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Spinner from './components/Spinner';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Грузим</h1>}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
