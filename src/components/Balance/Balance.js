import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from '../../redux/global/global-operation';
import style from './Balance.module.css';

const Balance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);
  const balance = useSelector(fetchBalance);

  return (
    <div className={style.balance}>
      <h1 className={style.title}>Ваш баланс</h1>
      <span className={style.amount}>₴ {balance} </span>
    </div>
  );
};

export default Balance;
