import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from '../../redux/global/global-operation';
import { istotalBalance } from '../../redux/global/global-selectors';
import style from './Balance.module.css';

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(istotalBalance);
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <div className={style.balance}>
      <h1 className={style.title}>Ваш баланс</h1>
      <span className={style.amount}>₴ {balance} </span>
    </div>
  );
}

// Balance.propTypes = {

//   balance: PropTypes.number.isRequired,

// };
