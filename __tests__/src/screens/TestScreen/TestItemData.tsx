import {TestResultsDataType} from '../../../../apiTypes';

const data: TestResultsDataType[] = [
  {
    id: '5d41b693ff5aa89d8fdc3ae8',
    title: 'Basic',
    date: '16.07.2019',
    result: [
      {
        biomarker: 'magnesium',
        color: '#0085FF',
        percentage: 25,
      },
      {
        biomarker: 'carbohydrates',
        color: '#D3235D',
        percentage: 25,
      },
      {
        biomarker: 'zinc',
        color: '#e30613',
        percentage: 25,
      },
      {
        biomarker: 'iron',
        color: '#ffcc00',
        percentage: 25,
      },
    ],
  },
  {
    id: '5d41b6938f1360cdde5ecc89',
    title: 'Advanced',
    date: '08.07.2019',
    result: [
      {
        biomarker: 'protein',
        color: '#E2D669',
        percentage: 25,
      },
      {
        biomarker: 'vitamins',
        color: '#ffcc00',
        percentage: 25,
      },
      {
        biomarker: 'magnesium',
        color: '#e30613',
        percentage: 25,
      },
      {
        biomarker: 'carbohydrates',
        color: '#0085FF',
        percentage: 25,
      },
    ],
  },
];

export default data;
