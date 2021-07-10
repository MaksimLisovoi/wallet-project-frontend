import React from 'react';
import styles from './blueStain.module.css';
import stain from './blue-stain.png';
const blueStain = () => {
  return (
    <div className={styles.stainContainer}>
      <img className={styles.position} src={stain} alt={'blueStain'} />
    </div>
  );
};

export default blueStain;
