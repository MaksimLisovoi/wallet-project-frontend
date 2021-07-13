import React, { useState } from 'react';
import Switch from 'react-switch';
import TransCategory from '../SelectTransacCategory/TransCategory';
import style from './SwitchToggle.module.css';

const SwitchToggle = () => {
  const [expense, setExpense] = useState(false);
  const handleChange = nextExpense => {
    setExpense(nextExpense);
  };

  const [category, setCategory] = useState('');
  const updateCategory = e => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <p style={{ color: expense ? '' : '#24CCA7' }}>
          <strong>Доход</strong>
        </p>
        <label htmlFor="small-radius-switch">
          <Switch
            checked={expense}
            onChange={handleChange}
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
        <p style={{ color: expense ? '#FF6596' : '' }}>
          <strong>Расход</strong>
        </p>
      </div>
      {expense === true ? (
        <TransCategory
          onChange={updateCategory}
          value={category}
          // style={{
          //   background: 'tomato',
          //   boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          //   backdropFilter: 'blur(50px)',
          //   borderRadius: '20px',
          // }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default SwitchToggle;
