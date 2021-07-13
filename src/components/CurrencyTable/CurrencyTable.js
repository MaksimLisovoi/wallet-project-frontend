import { useEffect, useState } from "react";
import axios from 'axios'
import style from './CurrencyTable.module.css'

export default function CurrencyTable() {
    const [currency, setCurrency] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    async function getCurrency() {
        try {
            const {data} = await axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
            const result = await data;
            setIsLoaded(true);
            setCurrency(result)
    } catch (e) {
        setIsLoaded(true);
        setError(error)
        }
    }
        
    useEffect(() => {
        getCurrency()
    }, [])

    const currencyFilter = currency.filter(el => {
        return el.ccy !== 'BTC'
    })
        
    if (error) {
        return <div>Error: { error.message }</div>
    } else if (!isLoaded) {
        return <div>Загружаем...</div>
    } else {
        return (
            <div className={style.container}>
                <div className={style.bcg}>
                    <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Валюта</th>
                            <th>Покупка</th>
                            <th>Продажа</th>
                        </tr>
                    </thead>


                    <tbody>
                        {currencyFilter.map(({ ccy, buy, sale }) => {
                            const buyParse = parseFloat(buy).toFixed(2)
                            const saleParse = parseFloat(sale).toFixed(2)
                            return(
                        <tr key={ccy}>
                                <td >{ccy}</td>
                                <td>{buyParse}</td>
                                <td>{saleParse}</td>
                            </tr>
                            )
                        })}
                    
                    </tbody>

                </table>

                </div>
            </div>
        )
    }
}

