import React from 'react';
import st from './girl.module.css';
import PhotoGirl from './Frame.png';

const Girl = () => {
  return (
    <div className={st.size}>
      <img src={PhotoGirl} alt="photoGirl" />
      <span className={st.text}>Finance App</span>
    </div>
  );
};

export default Girl;
