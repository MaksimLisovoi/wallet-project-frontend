import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import Header from '../../../components/Header/Header';

import Balance from '../../../components/Balance';
// import Currency from '../../../components/Currency/Currenсy';
import DiagramTab from '../../../components/DiagramTab/DiagramTab';
import BtnAddTransc from '../../../components/BtnAddTransc/BtnAddTransc';

import styles from './DiagramView.module.css';

const DiagramView = () => {
  // const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {/* <Header /> */}

      <DiagramTab />

      {/* {isDesktopOrLaptop && <Currency />} */}
    </>
  );
};

export default DiagramView;
