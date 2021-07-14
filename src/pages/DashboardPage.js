import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import DiagramTab from '../components/DiagramTab/DiagramTab';
import Header from '../components/Header/Header';
import HomeTab from '../components/HomeTab';
import { fetchTransactions } from '../redux/global/global-operation';

//---Решить что-то с шрифтом и цветом бэкграунда

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <h1>This is DashboardPage</h1>
      <Header />
      {/* <DiagramTab /> */}
      <HomeTab />
    </>
  );
};

export default DashboardPage;
