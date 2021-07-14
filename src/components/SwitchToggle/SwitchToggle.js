import React, { useState } from 'react';
import Switch from 'react-switch';
import style from './SwitchToggle.module.css';
import Select from 'react-select';

const SwitchToggle = () => {
  const [category, setCategory] = useState(false);
  const updateCategory = nextcategory => {
    setCategory(nextcategory);
  };

  const [type, setType] = useState('');
  const updateType = e => {
    setType(e.target.value);
  };

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

  return (
    <>
      <div className={style.container}>
        <p style={{ color: category ? '' : '#24CCA7' }}>
          <strong>Доход</strong>
        </p>
        <label htmlFor="small-radius-switch" onChange={updateType}>
          <Switch
            value
            {...type}
            checked={category}
            onChange={updateCategory}
            offColor="#E0E0E0"
            onColor="#E0E0E0"
            onHandleColor="#FF6596"
            offHandleColor="#24CCA7"
            handleDiameter={44}
            activeBoxShadow="1px solid #E0E0E0"
            height={40}
            width={80}
            borderRadius={30}
            uncheckedIcon={<div className={style.uncheckedIcon}>Off</div>}
            checkedIcon={<div className={style.checkedIcon}>On</div>}
            uncheckedHandleIcon={
              <div className={style.uncheckedHandleIcon}>&#43;</div>
            }
            checkedHandleIcon={
              <div className={style.uncheckedHandleIcon}>&#8722;</div>
            }
          />
        </label>
        <p style={{ color: category ? '#FF6596' : '' }}>
          <strong>Расход</strong>
        </p>
      </div>
      {category === true ? TransCategory() : ''}
    </>
  );
};

export default SwitchToggle;
