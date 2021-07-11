import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import styles from './DiagramTab.module.css';

// --- Написать логику запроса с Апи и отправить данные в Таблицу
// --- Написть функцию которая принимает и переделывает обьект для Чарта
// сделать подписку на Редакс

// ---(плохой вариант) можно сделать фильтр по определенной категории и создать массив конкретно под эту категорию.
// --- И splice"ом подставить под определенный индекс в массив для отрисовки.

class DiagramTab extends Component {
  state = {
    chartForData: {},
    overallPlus: 0,
    overallMinus: 0,
  };

  componentDidMount() {
    this.getChartData();
    this.overallSumPlus(this.getDataFromApi());
    this.overallSumMinus(this.getDataFromApi());
  }

  async getChartData() {
    const dataFromAPI = {
      labels: [
        'Основные',
        'Еда',
        'Авто',
        'Развитие',
        'Дети',
        'Дом',
        'Образование',
        'Остальное',
      ],
      datasets: [
        {
          label: 'Population',
          data: [8700, 3800, 1500, 800, 2000, 300, 3400, 1230],
          backgroundColor: [
            'rgba(254, 208, 87, 1)',
            'rgba(255, 216, 208, 1)',
            'rgba(253, 148, 152, 1)',
            'rgba(197, 186, 255, 1)',
            'rgba(110, 120, 232, 1)',
            'rgba(74, 86, 226, 1)',
            'rgba(129, 225, 255, 1)',
            'rgba(0, 173, 132, 1)',
          ],
          cutout: '70%',
        },
      ],
    };
    if (dataFromAPI) {
      return await this.setState({ chartForData: dataFromAPI });
    }
  }

  getDataFromApi = () => {
    const dataFromApi = {
      status: 'success',
      code: 200,
      data: {
        transactions: [
          {
            category: 'Доход',
            _id: '60e4d233429d7d2f286ad95f',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: '+',
            sum: 1000,
            balance: 1000,
            createdAt: '2021-07-06T21:59:15.256Z',
            updatedAt: '2021-07-06T21:59:15.256Z',
          },
          {
            category: 'Доход',
            _id: '60e4d245429d7d2f286ad960',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: '+',
            sum: 1000,
            balance: 2000,
            createdAt: '2021-07-06T21:59:33.220Z',
            updatedAt: '2021-07-06T21:59:33.220Z',
          },
          {
            category: 'Доход',
            _id: '60e4d246429d7d2f286ad961',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: '+',
            sum: 1000,
            balance: 3000,
            createdAt: '2021-07-06T21:59:34.155Z',
            updatedAt: '2021-07-06T21:59:34.155Z',
          },
          {
            category: 'Машина',
            _id: '60e5d9f380beac2c50d4a9ce',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: 'minus',
            sum: 1000,
            balance: 2000,
            createdAt: '2021-07-07T16:44:35.204Z',
            updatedAt: '2021-07-07T16:44:35.204Z',
          },
          {
            category: 'Дети',
            _id: '60e5d9f380beac2c50d4a9ce',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: 'minus',
            sum: 1000,
            balance: 1000,
            createdAt: '2021-07-07T16:44:35.204Z',
            updatedAt: '2021-07-07T16:44:35.204Z',
          },
          {
            category: 'Дом',
            _id: '60e5d9f380beac2c50d4a9ce',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: 'minus',
            sum: 1500,
            balance: 1000,
            createdAt: '2021-07-07T16:44:35.204Z',
            updatedAt: '2021-07-07T16:44:35.204Z',
          },
          {
            category: 'Развитие',
            _id: '60e5d9f380beac2c50d4a9ce',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: 'minus',
            sum: 800,
            balance: 1000,
            createdAt: '2021-07-07T16:44:35.204Z',
            updatedAt: '2021-07-07T16:44:35.204Z',
          },
          {
            category: 'Доход',
            _id: '60e4d246429d7d2f286ad961',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: '+',
            sum: 5000,
            balance: 3000,
            createdAt: '2021-07-06T21:59:34.155Z',
            updatedAt: '2021-07-06T21:59:34.155Z',
          },
          {
            category: 'Образование',
            _id: '60e5d9f380beac2c50d4a9ce',
            owner: {
              name: "C'thun",
              _id: '60e4c99e174f432c74022fdc',
              email: 'Chtun@i.ua',
            },
            date: '1971-09-25T13:50:54.564Z',
            type: 'minus',
            sum: 2000,
            balance: 1000,
            createdAt: '2021-07-07T16:44:35.204Z',
            updatedAt: '2021-07-07T16:44:35.204Z',
          },
        ],
        totalDocs: 9,
        offset: 0,
        limit: 20,
        totalPages: 1,
        page: 1,
        pagingCounter: 1,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: null,
        nextPage: null,
      },
    };

    return dataFromApi;
  };

  overallSumPlus = data => {
    let arr = [];
    let overall = 0;

    data.data.transactions.map(({ type, sum }) => {
      if (type === '+') {
        arr.push(sum);
        overall = arr.reduce((acc, value) => acc + value, 0);
      }
    });

    this.setState({ overallPlus: overall });
  };

  overallSumMinus = data => {
    let arr = [];
    let overall = 0;

    data.data.transactions.map(({ type, sum }) => {
      if (type === 'minus') {
        arr.push(sum);
        overall = arr.reduce((acc, value) => acc + value, 0);
      }
    });

    this.setState({ overallMinus: overall });
  };

  trasformDataForChart = data => {
    const labels = [];

    data.data.transactions.map(({ category, type, sum }) => {
      console.log({ category, type, sum });
      if (!labels.includes(category)) {
        labels.push(category);
      }
    });

    console.log(labels);

    const dataForChart = {
      labels: [
        'Основные',
        'Еда',
        'Авто',
        'Развитие',
        'Дети',
        'Дом',
        'Образование',
        'Остальное',
      ],
      datasets: [
        {
          label: 'Statistics',
          data: [8700, 3800, 1500, 800, 2008, 300, 3400, 1230],
          backgroundColor: [
            'rgba(254, 208, 87, 1)',
            'rgba(255, 216, 208, 1)',
            'rgba(253, 148, 152, 1)',
            'rgba(197, 186, 255, 1)',
            'rgba(110, 120, 232, 1)',
            'rgba(74, 86, 226, 1)',
            'rgba(129, 225, 255, 1)',
            'rgba(0, 173, 132, 1)',
          ],
          cutout: '70%',
        },
      ],
    };
    console.log(dataForChart);
    return dataForChart;
  };

  render() {
    this.trasformDataForChart(this.getDataFromApi());

    return (
      <>
        <h2 className={styles.diagram_tab_heading}>Statistics</h2>
        <div className={styles.diagram_tab_container}>
          <Chart chartData={this.state.chartForData} />
          <Table
            chartData={this.state.chartForData}
            sumPlus={this.state.overallPlus}
            sumMinus={this.state.overallMinus}
          />
        </div>
      </>
    );
  }
}

export default DiagramTab;
