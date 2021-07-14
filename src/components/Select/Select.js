import React from 'react';
import styles from './Select.module.css';
import { v4 as uuidv4 } from 'uuid';

const Select = ({ mainSelect, allSelects }) => {
  return (
    <div className={styles.select_wrapper}>
      <select className={styles.select}>
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
};

export default Select;
