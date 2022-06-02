/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import TestItem from '../../../../src/screens/TestsScreen/TestItem';
import data from './TestItemData';

it('Data information renders correctly', () => {
  const {getByText} = render(<TestItem data={data[0]} />);
  getByText(data[0].title);
  getByText(data[0].date);
  getByText(`${data[0].result[0].biomarker} ${data[0].result[0].percentage}%`);
  getByText(`${data[0].result[1].biomarker} ${data[0].result[1].percentage}%`);
  expect(
    getByText(
      `${data[0].result[0].biomarker} ${data[0].result[0].percentage}%`,
    ),
  ).toHaveStyle({color: data[0].result[0].color});
});
