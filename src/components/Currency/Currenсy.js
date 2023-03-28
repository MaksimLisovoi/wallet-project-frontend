import { useEffect, useState } from 'react';
import { Ellipsis } from 'react-spinners-css';
import style from './Currency.module.css';
import axios from 'axios';
const cc = require('currency-codes');

export default function Currency() {
  const [currency, setCurrency] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // https://api.privatbank.ua/#p24/exchange

  // async function getCurrency() {
  //   try {
  //     const { data } = await axios.get('https://api.monobank.ua/bank/currency');

  //     // const courses = data.slice(0, 2);

  //     setIsLoading(true);
  //     setCurrency(data);
  //   } catch (e) {
  //     setIsLoading(true);
  //     setError(error);
  //   }
  // }

  useEffect(() => {
    async function getCurrency() {
      try {
        const { data } = await axios.get(
          'https://api.monobank.ua/bank/currency',
        );

        // const courses = data.slice(0, 2);

        setIsLoading(true);
        setCurrency(data);
      } catch (e) {
        setIsLoading(true);
        setError(error);
      }
    }
    getCurrency();
  }, [error]);

  const courses = currency.slice(0, 2);

  // const currencyFilter = currency.filter(el => {
  //   return el.currencyCodeA === 840 && el.currencyCodeA === 980;
  // });

  // console.log(currencyFilter);

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div className={style.head}>
          <p>Валюта</p>
          <p>Покупка</p>
          <p>Продажа</p>
        </div>
      </div>
      <div>
        {!isLoading && (
          <div>
            <Ellipsis color="rgba(255, 255, 255, 0.2)" />
          </div>
        )}
        {error && (
          <div>
            <p className={style.warning}>
              Повторите запрос через несколько минут
            </p>
          </div>
        )}
        {/* {currencyFilter.map(({ ccy, buy, sale }) => {
          const buyParse = parseFloat(buy).toFixed(2);
          const saleParse = parseFloat(sale).toFixed(2);
          return (
            <ul key={ccy} className={style.table}>
              <li>{ccy}</li>
              <li>{buyParse}</li>
              <li>{saleParse}</li>
            </ul>
          );
        })} */}
        {courses.map(({ currencyCodeA, rateBuy, rateSell }) => {
          const buyParse = parseFloat(rateBuy).toFixed(2);
          const saleParse = parseFloat(rateSell).toFixed(2);
          const { code } = cc.number(currencyCodeA);

          return (
            <ul key={currencyCodeA} className={style.table}>
              <li>{code}</li>
              <li>{buyParse}</li>
              <li>{saleParse}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
