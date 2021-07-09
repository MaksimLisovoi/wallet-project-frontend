import React from 'react';
import styles from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';

//--- Добавить баланс в центр пончика !

//Опции для Диаграммы больше можно узнать --> https://www.chartjs.org/docs/latest/

const optionsForChart = {
  plugins: {
    title: {
      display: false,
      text: 'Просто диаграмма',
    },
    legend: {
      display: false,
      position: 'bottom',
    },
  },
};

const Chart = ({ chartData }) => {
  return (
    <div className={styles.chart}>
      <Doughnut data={chartData} options={optionsForChart} />
    </div>
  );
};

export default Chart;
