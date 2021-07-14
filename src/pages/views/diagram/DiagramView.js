import React from 'react';
import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation';
import Balance from '../../../components/Balance';
import Currency from '../../../components/Currency/Currensy';
import DiagramTab from '../../../components/DiagramTab/DiagramTab';
import BtnAddTransc from '../../../components/BtnAddTransc/BtnAddTransc';

const DiagramView = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <DiagramTab />
      <BtnAddTransc />
    </>
  );
};

export default DiagramView;
