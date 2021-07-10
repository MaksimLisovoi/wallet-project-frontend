import React, { Component } from 'react';
import styles from './TransCategory.module.css';

import Select from 'react-select';

const options = [
  { value: 'Основной', label: 'Основной' },
  { value: 'Еда', label: 'Еда' },
  { value: 'Авто', label: 'Авто' },
  { value: 'Развитие', label: 'Развитие' },
  { value: 'Дети', label: 'Дети' },
  { value: 'Дом', label: 'Дом' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Остальные', label: 'Остальные' },
];

const TransCategory = () => (
  <Select
    options={options}
    formatGroupLabel={formatGroupLabel}
    // styles={{ borderStyle: 'none' }}
    // className={styles.ssssss}
  />
);

const formatGroupLabel = data => (
  <div>
    <span>{data.label}</span>
  </div>
);

export default TransCategory;
