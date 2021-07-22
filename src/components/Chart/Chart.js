import React from 'react';
import styles from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ chartData, sumMinus }) => {
  let optionsForChart = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          afterLabel: i => {
            const sum = i.dataset.data.reduce(
              (acc, value) => Number.parseInt(acc) + Number.parseInt(value),
              0,
            );
            const percent = ((i.parsed * 100) / sum).toFixed(2);
            return percent + '%';
          },
        },
        padding: 15,
        bodyAlign: 'center',
      },
    },
  };

  return (
    <div className={styles.chart}>
      <span className={styles.label_sum}>₴ {sumMinus}</span>
      <Doughnut data={chartData} options={optionsForChart} />
    </div>
  );
};

export default Chart;
