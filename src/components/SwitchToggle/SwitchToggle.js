import React, { Component, useState } from 'react';
import Switch from 'react-switch';
import TransCategory from '../SelectTransacCategory/TransCategory';
import style from './SwitchToggle.module.css';
import plus from '../BtnAddTransc/+.png';
import minus from './minus.png';

class SwitchToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <>
        <div className={style.container}>
          <p style={{ color: this.state.checked ? '#E0E0E0' : '#24CCA7' }}>
            <strong>Доход</strong>
          </p>
          <label htmlFor="small-radius-switch">
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
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
                    <img src={plus} className={style.plus}></img>
                  </span>
                </div>
              }
              checkedHandleIcon={
                <div className={style.uncheckedHandleIcon}>
                  <span>
                    <img src={minus} className={style.minus}></img>
                  </span>
                </div>
              }
            />
          </label>
          <p style={{ color: this.state.checked ? '#FF6596' : '#E0E0E0' }}>
            <strong>Расход</strong>
          </p>
        </div>
        {this.state.checked === true ? (
          <TransCategory
            updateCategory={this.props.updateSwitcher}
            // value={this.state.category}
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
  }
}

export default SwitchToggle;
