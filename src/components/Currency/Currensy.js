import { useEffect, useState } from "react";
import axios from 'axios'
import { Ellipsis } from 'react-spinners-css';
import style from './Currency.module.css'

export default function Currency() {
    const [currency, setCurrency] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
        
    useEffect(() => {
        async function getCurrency() {
            try {
                const result = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
                setIsLoading(true);
                setCurrency(result)
            } catch (e) {
                setIsLoading(true);
                setError(e)
            }
        }

        getCurrency()
    }, [])

    const currencyFilter = currency.filter(el => {
        return el.ccy !== 'BTC'
    })
        

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
                    {!isLoading && (<div><Ellipsis color="rgba(255, 255, 255, 0.2)" /></div>)}
                    {error && (<div><p className={style.warning}>Повторите запрос через несколько минут</p></div>)}
                        {currencyFilter.map(({ ccy, buy, sale }) => {
                            const buyParse = parseFloat(buy).toFixed(2)
                            const saleParse = parseFloat(sale).toFixed(2)
                            return(
                        <ul key={ccy} className={style.table}>
                                <li >{ccy}</li>
                                <li>{buyParse}</li>
                                <li>{saleParse}</li>
                            </ul>
                            )
                        })}

                    </div>
            </div>
        )
}