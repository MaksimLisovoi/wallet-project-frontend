import React from 'react';
import DiagramTab from '../components/DiagramTab/DiagramTab';
import Header from '../components/Header/Header';
import CurrencyTable from '../components/CurrencyTable/CurrencyTable'

//---Решить что-то с шрифтом и цветом бэкграунда

const DashboardPage = () => {
  return (
    <>
      <h1>This is DashboardPage</h1>
      <Header />
      <CurrencyTable />
      <DiagramTab />
    </>
  );
};

export default DashboardPage;
