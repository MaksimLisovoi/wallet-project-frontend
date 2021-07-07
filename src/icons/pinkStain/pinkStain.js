import React from 'react';
import styles from './pinkStain.module.css';
import stain from './pink-stain.png';
const blueStain = () => {
  return (
    <div className={styles.stainContainer}>
      <img className={styles.position} src={stain} alt={'pinkStain'} />
    </div>
  );
};

export default blueStain;
