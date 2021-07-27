import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation';
import Balance from '../../../components/Balance';
import Currency from '../../../components/Currency/Currensy';
import DiagramTab from '../../../components/DiagramTab/DiagramTab';
import BtnAddTransc from '../../../components/BtnAddTransc/BtnAddTransc';

import styles from './DiagramView.module.css';

const DiagramView = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {/* <Header /> */}
      <div className={styles.diagramView}>
        <Navigation />
        <Balance />
        <DiagramTab />
        <BtnAddTransc />
        {isDesktopOrLaptop && <Currency />}
      </div>
    </>
  );
};

export default DiagramView;
