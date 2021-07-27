import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation';
import Balance from '../../../components/Balance';
import Currency from '../../../components/Currency/Currensy';
import HomeTab from '../../../components/HomeTab';
import BtnAddTransc from '../../../components/BtnAddTransc/BtnAddTransc';

import styles from './HomePageView.module.css';

const HomePageView = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {/* <Header /> */}
      <div className={styles.homePage}>
        <Navigation />
        <Balance />
        <BtnAddTransc />
        <HomeTab />
        {isDesktopOrLaptop && <Currency />}
      </div>
    </>
  );
};

export default HomePageView;
