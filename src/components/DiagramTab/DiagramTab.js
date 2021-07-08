import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import styles from './DiagramTab.module.css';

class DiagramTab extends Component {
  state = {
    chartData: {},
  };

  componentDidMount() {
    this.getCharData();
  }

  async getCharData() {
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
    if (dataFromAPI) {
      return await this.setState({ chartData: dataFromAPI });
    }
  }

  render() {
    return (
      <>
        <h2 className={styles.diagram_tab_heading}>Statistics</h2>
        <div className={styles.diagram_tab_container}>
          <Chart chartData={this.state.chartData} />
          <Table chartData={this.state.chartData} />
        </div>
      </>
    );
  }
}

export default DiagramTab;
