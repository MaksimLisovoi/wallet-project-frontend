import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
// import Container from '../../../components/Container';
import HomePageView from '../../../pages/views/homepage';
import AuthNav from '../../../components/AuthNav';
import { fetchTransactions } from '../../../redux/global/global-operation';

import { getisAuthenticated } from '../../../redux/auth/auth-selectors';

import styles from './DashboardPage.module.css';
//---Решить что-то с шрифтом и цветом бэкграунда

export default function DashboardPage() {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  const isAuthenticated = useSelector(getisAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      {/* <Container> */}
      <div className={styles.dashboard}>
        {isAuthenticated ? <HomePageView /> : <AuthNav />}
      </div>
      {/* </Container> */}
    </>
  );
}
