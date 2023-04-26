import React from 'react';
import styles from './Select.module.css';
import { v4 as uuidv4 } from 'uuid';
import { valueSelect } from '../../redux/global/global-action';
import { statisticDate } from '../../redux/global/global-selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Select({ mainSelect, allSelects }) {
  const dispatch = useDispatch();

  let value;
  const current = useSelector(statisticDate);

  if (mainSelect === 'Месяц') {
    if (current.month) {
      value = current.month;
    }
  }
  if (mainSelect === 'Год') {
    if (current.year) {
      value = current.year;
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
        {/* <option value="current">{mainSelect}</option> */}

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
