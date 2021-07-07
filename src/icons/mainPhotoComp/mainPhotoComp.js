import React from 'react';
import styles from './main.module.css';
import main from './main-img.png';

function MainPhoto() {
  return (
    <div className={styles.stainContainer}>
      <img
        width="260px"
        height="250px"
        className={styles.position}
        src={main}
        alt={'main'}
      />
    </div>
  );
}
export default MainPhoto;
