import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import styles from './DiagramTab.module.css';
import {
  getStatictic,
  statisticDate,
} from '../../redux/global/global-selectors';
import { fetchStatictic } from '../../redux/global/global-operation';
import { useDispatch, useSelector } from 'react-redux';

export default function DiagramTab() {
  const [dataForChart, setChartData] = useState({});
  const [overallPlus, setOverallPlus] = useState(0);
  const [overallMinus, setOverallMinus] = useState(0);

  // Селектор на забор всех транзакций из Store
  const statistic = useSelector(getStatictic);
  const date = useSelector(statisticDate);
  console.log(date);

  useEffect(() => {
    trasformDataForChart(statistic);
    overallSum(statistic);
  }, [statistic]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatictic(date));
  }, [date]);

  // Функция которая берёт сумму всех доходов и расходов.
  const overallSum = data => {
    let overallPlus = 0;
    let overallMinus = 0;
    if (data) {
      data.map(({ type, sum }) => {
        switch (type) {
          case '+':
            overallPlus = overallPlus + sum;
            break;
          case 'minus':
            overallMinus = overallMinus + sum;
            break;
          default:
            console.log('Нет такого типа');
        }
      });
      setOverallPlus(overallPlus);
      setOverallMinus(overallMinus);
    }
  };
  // Функция которая делает объект для Chart и записывает его в локальный стейт.
  const trasformDataForChart = data => {
    const labels = [];
    let sumOsnov = 0;
    let sumProducts = 0;
    let sumCar = 0;
    let sumSelf = 0;
    let sumChild = 0;
    let sumHome = 0;
    let sumEducation = 0;
    let sumLeisure = 0;
    let sumOther = 0;
    if (data) {
      data.map(({ category, sum }) => {
        if (!labels.includes(category)) {
          labels.push(category);
        }

        switch (category) {
          case 'Основные расходы':
            sumOsnov = sumOsnov + sum;
            break;
          case 'Продукты':
            sumProducts = sumProducts + sum;
            break;
          case 'Авто':
            sumCar = sumCar + sum;
            break;
          case 'Забота о себе':
            sumSelf = sumSelf + sum;
            break;
          case 'Дети':
            sumChild = sumChild + sum;
            break;
          case 'Дом':
            sumHome = sumHome + sum;
            break;
          case 'Образование':
            sumEducation = sumEducation + sum;
            break;
          case 'Досуг':
            sumLeisure = sumLeisure + sum;
            break;
          case 'Другие расходы':
            sumOther = sumOther + sum;
            break;
          case 'Доход':
            break;
          default:
            console.log('Этой категории нет из представленных');
        }
      });

      const dataForChart = {
        labels: [
          'Основные расходы',
          'Продукты',
          'Авто',
          'Забота о себе',
          'Дети',
          'Дом',
          'Образование',
          'Досуг',
          'Другие расходы',
        ],
        datasets: [
          {
            label: 'Statistics',
            data: [
              `${sumOsnov}`,
              `${sumProducts}`,
              `${sumCar}`,
              `${sumSelf}`,
              `${sumChild}`,
              `${sumHome}`,
              `${sumEducation}`,
              `${sumLeisure}`,
              `${sumOther}`,
            ],
            backgroundColor: [
              'rgba(254, 208, 87, 1)',
              'rgba(255, 216, 208, 1)',
              'rgba(253, 148, 152, 1)',
              'rgba(197, 186, 255, 1)',
              'rgba(110, 120, 232, 1)',
              'rgba(74, 86, 226, 1)',
              'rgba(129, 225, 255, 1)',
              'rgba(36, 204, 167, 1)',
              'rgba(0, 173, 132, 1)',
            ],
            cutout: '70%',
          },
        ],
      };
      setChartData(dataForChart);
    }
  };

  return (
    <div className={styles.diagramPosition}>
      <h2 className={styles.diagram_tab_heading}>Statistics</h2>
      <div className={styles.diagram_tab_container}>
        <Chart chartData={dataForChart} />
        <Table
          chartData={dataForChart}
          sumPlus={overallPlus}
          sumMinus={overallMinus}
        />
      </div>
    </div>
  );
}
