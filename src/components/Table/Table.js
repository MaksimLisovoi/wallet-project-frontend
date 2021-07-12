import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from '../Select/Select';
import styles from './Table.module.css';

//---Нужно доделать линию внизу каждой <li>

const monthSelects = {
  name: [
    { nameOption: 'Январь', value: 1 },
    { nameOption: 'Февраль', value: 2 },
    { nameOption: 'Март', value: 3 },
    { nameOption: 'Апрель', value: 4 },
    { nameOption: 'Май', value: 5 },
    { nameOption: 'Июнь', value: 6 },
    { nameOption: 'Июль', value: 7 },
    { nameOption: 'Август', value: 8 },
    { nameOption: 'Сентябрь', value: 9 },
    { nameOption: 'Октябрь', value: 10 },
    { nameOption: 'Ноябрь', value: 11 },
    { nameOption: 'Декабрь', value: 12 },
  ],
};

const yearSelects = {
  name: [
    { nameOption: '2021', value: 2021 },
    { nameOption: '2020', value: 2020 },
    { nameOption: '2019', value: 2019 },
    { nameOption: '2018', value: 2018 },
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
            chartData.datasets[0].backgroundColor.map(i => (
              <li key={uuidv4()} className={styles.table_list_item}>
                <div
                  style={{
                    backgroundColor: `${i}`,
                    height: `24px`,
                    width: `24px`,
                    borderRadius: `2px`,
                  }}
                ></div>
              </li>
            ))}
        </ul>
        <ul className={styles.table_list_labels}>
          {chartData.labels &&
            chartData.labels.map(i => (
              <li key={uuidv4()} className={styles.table_list_item}>
                {i}
              </li>
            ))}
        </ul>
        <ul className={styles.table_list_sum}>
          {chartData.labels &&
            chartData.datasets[0].data.map(i => (
              <li key={uuidv4()} className={styles.table_list_item}>
                {i}
              </li>
            ))}
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
