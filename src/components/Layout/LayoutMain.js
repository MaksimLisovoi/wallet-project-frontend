import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import s from '../../styles/base.module.css';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import BtnAddTransc from '../../components/BtnAddTransc/BtnAddTransc';
import Currency from '../../components/Currency/Currenсy';
import { useMediaQuery } from 'react-responsive';
import styles from '../../pages/views/homepage/HomePageView.module.css';
import { Toaster } from 'react-hot-toast';

export const LayoutMain = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Header />
      <div className={s.container}>
        <div className={styles.homePage}>
          <Navigation />
          <Balance />
          <BtnAddTransc />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          {isDesktopOrLaptop && <Currency />}
          <Toaster />
        </div>
      </div>
    </>
  );
};
