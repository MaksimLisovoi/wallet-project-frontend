import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Основные расходы', label: 'Основные расходы' },
  { value: 'Продукты', label: 'Продукты' },
  { value: 'Авто', label: 'Авто' },
  { value: 'Забота о себе', label: 'Забота о себе' },
  { value: 'Дети', label: 'Дети' },
  { value: 'Дом', label: 'Дом' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Досуг', label: 'Досуг' },
  { value: 'Другие расходы', label: 'Другие расходы' },
];

const TransCategory = () => (
  <Select options={options} formatGroupLabel={formatGroupLabel} />
);

const formatGroupLabel = data => (
  <div>
    <span>{data.label}</span>
  </div>
);

export default TransCategory;
