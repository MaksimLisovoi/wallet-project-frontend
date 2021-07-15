import React from 'react';
import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation';
import Balance from '../../../components/Balance';
import Currency from '../../../components/Currency/Currensy';
// import HomeTab from '../../../components/HomeTab';
import BtnAddTransc from '../../../components/BtnAddTransc/BtnAddTransc';

const HomePageView = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <BtnAddTransc />
      {/* <HomeTab /> */}
    </>
  );
};

export default HomePageView;
