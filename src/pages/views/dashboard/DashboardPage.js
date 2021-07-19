import React from 'react';
import { useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import Container from '../../../components/Container';
import HomePageView from '../../../pages/views/homepage';
import AuthNav from '../../../components/AuthNav';

import { getisAuthenticated } from '../../../redux/auth/auth-selectors';

import styles from './DashboardPage.module.css';
//---Решить что-то с шрифтом и цветом бэкграунда

const DashboardPage = () => {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  const isAuthenticated = useSelector(getisAuthenticated);

  return (
    <>
      {/* <Container> */}
      <div className={styles.dashboard}>
        {isAuthenticated ? <HomePageView /> : <AuthNav />}
      </div>
      {/* </Container> */}
    </>
  );
};

export default DashboardPage;
