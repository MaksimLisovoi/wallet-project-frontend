import React from 'react';
import DiagramTab from '../components/DiagramTab/DiagramTab';
import Header from '../components/Header/Header';
import Currency from '../components/Currency/Currensy'

//---Решить что-то с шрифтом и цветом бэкграунда

const DashboardPage = () => {
  return (
    <>
      <h1>This is DashboardPage</h1>
      <Header />
      <Currency />
      <DiagramTab />
    </>
  );
};

export default DashboardPage;
