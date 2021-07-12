const data = [
  {
    _id: {
      $oid: '1111',
    },
    date: '2017-10-16T21:00:00.000Z',
    type: '-',
    category: 'car',
    comments: 'хлеб',
    sum: '10',
    balance: '105',
    owner: {
      $oid: '6000',
    },
  },
  {
    _id: {
      $oid: '11345',
    },
    date: '2017-09-21T21:00:00.000Z',
    type: '-',
    category: 'car',
    // comments: 'машинное масло',
    sum: '45',
    balance: '105',
    owner: {
      $oid: '6000',
    },
  },
  {
    _id: {
      $oid: '11890',
    },
    date: '2018-09-21T21:00:00.000Z',
    type: '+',
    category: 'car',
    comments: 'зп',
    sum: '1122334',
    balance: '105',
    owner: {
      $oid: '6000',
    },
  },
  {
    _id: {
      $oid: '1156789',
    },
    date: '2020-02-23T21:00:00.000Z',
    type: '-',
    category: 'car',
    comments: 'подарки',
    sum: '270',
    balance: '105',
    owner: {
      $oid: '6000',
    },
  },
];

export default data;
