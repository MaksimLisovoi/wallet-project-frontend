import React from 'react';
import styles from './Table.module.css';

//---Нужно добавить селекторы выбора
//---Нужно доделать линию внизу каждой <li>

const Table = ({ chartData }) => {
  return (
    <div className={styles.table}>
      <div className={styles.table_head}>
        <span className={styles.table_head_category}>Категория</span>
        <span className={styles.table_head_sum}>Сумма</span>
      </div>
      <div className={styles.list_container}>
        <ul className={styles.table_list_color}>
          {chartData.labels &&
            chartData.datasets[0].backgroundColor.map(i => (
              <li className={styles.table_list_item}>
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
              <li className={styles.table_list_item}>{i}</li>
            ))}
        </ul>
        <ul className={styles.table_list_sum}>
          {chartData.labels &&
            chartData.datasets[0].data.map(i => (
              <li className={styles.table_list_item}>{i}</li>
            ))}
        </ul>
      </div>
      <div className={styles.list_overall_container}>
        <ul className={styles.table_list_overall_labels}>
          <li>Pасходы:</li>
          <li>Доходы:</li>
        </ul>
        <ul className={styles.table_list_overall_sum}>
          <li className={styles.table_list_overall_item_red}>22 549</li>
          <li className={styles.table_list_overall_item_green}>27 350</li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
