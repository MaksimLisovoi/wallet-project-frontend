import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './styles/base.module.css';
import BlueStain from './icons/blueStain/blueStain';
import PinkStain from './icons/pinkStain/pinkStain';
import MainPhoto from './icons/mainPhotoComp/mainPhotoComp';

// import Spinner from './components/Spinner';

const RegisterPage = lazy(() =>
  import('./pages/views/registration/RegisterPage'),
);
const LoginPage = lazy(() => import('./pages/views/login/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App = () => {
  return (
    <>
      <MainPhoto />
      <BlueStain />
      <PinkStain />
      <div className={s.container}>
        <Suspense fallback={<h1>Грузим</h1>}>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
