import React from 'react';
import styles from './Select.module.css';
import { v4 as uuidv4 } from 'uuid';
import { valueSelect } from '../../redux/global/global-action';
import { statisticDate } from '../../redux/global/global-selectors';
import { useDispatch, useSelector } from 'react-redux';

//изначальное значени текущий месяц и год(прокинуть их сюда пропом)

export default function Select({ mainSelect, allSelects }) {
  const dispatch = useDispatch();

  const currentDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');
  console.log(currentDate);
  console.log(currentDate.slice(0, 4)); //берёт текущий год
  console.log(currentDate.slice(5, 7)); //берёт текущий месяц

  let value;
  const current = useSelector(statisticDate);

  if (mainSelect === 'Месяц') {
    // value = currentDate.slice(5, 7);
    if (current.month) {
      value = current.month;
      console.log('Месяц');
      console.log(value);
    }
  }
  if (mainSelect === 'Год') {
    // value = currentDate.slice(0, 4);
    if (current.year) {
      value = current.year;
      console.log('Год');
      console.log(value);
    }
  }

  const handleChange = event => {
    if (event.currentTarget.value.length <= 2) {
      dispatch(valueSelect({ month: event.currentTarget.value }));
    }
    if (event.currentTarget.value.length === 4) {
      dispatch(valueSelect({ year: event.currentTarget.value }));
    }
  };

  return (
    <div className={styles.select_wrapper}>
      <select
        className={styles.select}
        required
        value={value}
        onChange={handleChange}
      >
        <option value="current">{mainSelect}</option>

        {allSelects.name.map(i => (
          <option key={uuidv4()} value={i.value}>
            {i.nameOption}
          </option>
        ))}
      </select>

      <div className={styles.select_arrow}></div>
    </div>
  );
}
