import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from '../Select/Select';
import styles from './Table.module.css';

const monthSelects = {
  name: [
    { nameOption: 'Январь', value: 0 },
    { nameOption: 'Февраль', value: 1 },
    { nameOption: 'Март', value: 2 },
    { nameOption: 'Апрель', value: 3 },
    { nameOption: 'Май', value: 4 },
    { nameOption: 'Июнь', value: 5 },
    { nameOption: 'Июль', value: 6 },
    { nameOption: 'Август', value: 7 },
    { nameOption: 'Сентябрь', value: 8 },
    { nameOption: 'Октябрь', value: 9 },
    { nameOption: 'Ноябрь', value: 10 },
    { nameOption: 'Декабрь', value: 11 },
  ],
};

const yearSelects = {
  name: [
    { nameOption: '2023', value: 2021 },
    { nameOption: '2022', value: 2020 },
    { nameOption: '2021', value: 2019 },
    { nameOption: '2020', value: 2018 },
  ],
};

const Table = ({ chartData, sumPlus, sumMinus }) => {
  return (
    <div className={styles.table}>
      <div className={styles.select_container}>
        <Select mainSelect={'Месяц'} allSelects={monthSelects} />
        <Select mainSelect={'Год'} allSelects={yearSelects} />
      </div>

      <div className={styles.table_head}>
        <span className={styles.table_head_category}>Категория</span>
        <span className={styles.table_head_sum}>Сумма</span>
      </div>
      <div className={styles.list_container}>
        <ul className={styles.table_list_color}>
          {chartData.labels &&
            // eslint-disable-next-line array-callback-return
            chartData.datasets[0].backgroundColor.map((item, index) => {
              if (chartData.datasets[0].data[index] !== '0') {
                return (
                  <li key={uuidv4()} className={styles.table_list_item}>
                    <div
                      style={{
                        backgroundColor: `${item}`,
                        height: `24px`,
                        width: `24px`,
                        borderRadius: `2px`,
                      }}
                    ></div>
                    <div className={styles.table_list_labels}>
                      {chartData.labels[index]}
                    </div>
                    <div className={styles.table_list_sum}>
                      {chartData.datasets[0].data[index]}
                    </div>
                  </li>
                );
              }
            })}
        </ul>
      </div>
      <div className={styles.list_overall_container}>
        <ul className={styles.table_list_overall_labels}>
          <li>Pасходы:</li>
          <li>Доходы:</li>
        </ul>
        <ul className={styles.table_list_overall_sum}>
          <li className={styles.table_list_overall_item_red}>{sumMinus}</li>
          <li className={styles.table_list_overall_item_green}>{sumPlus}</li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
