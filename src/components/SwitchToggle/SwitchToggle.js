import React, { useState } from 'react';
import Switch from 'react-switch';
import TransCategory from '../SelectTransacCategory/TransCategory';
import style from './SwitchToggle.module.css';
import plus from '../BtnAddTransc/+.png';
import minus from './minus.png';

function SwitchToggle({ updateSwitcher }) {
  const [checked, setChecked] = useState(false);
  // const [expense, setExpense] = useState(false);
  const expense = false;
  const handleChange = checked => {
    setChecked(checked);
  };

  return (
    <>
      <div className={style.container}>
        <p style={{ color: expense ? '' : '#24CCA7' }}>
          <strong>Доход</strong>
        </p>
        <label htmlFor="small-radius-switch">
          <Switch
            checked={checked}
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
              <div className={style.uncheckedHandleIcon}>
                <span>
                  <img src={plus} alt="plus" className={style.plus}></img>
                </span>
              </div>
            }
            checkedHandleIcon={
              <div className={style.uncheckedHandleIcon}>
                <span>
                  <img src={minus} alt="minus" className={style.minus}></img>
                </span>
              </div>
            }
          />
        </label>
        <p style={{ color: expense ? '#FF6596' : '' }}>
          <strong>Расход</strong>
        </p>
      </div>
      {checked === true ? (
        <TransCategory updateCategory={updateSwitcher} />
      ) : (
        ''
      )}
    </>
  );
}

export default SwitchToggle;
