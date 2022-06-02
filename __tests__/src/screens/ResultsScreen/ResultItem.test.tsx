/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';

import data from './ResultItemData';
import ResultItem from '../../../../src/screens/ResultsScreen/ResultItem';

it('Data information renders correctly', () => {
  const {getByText} = render(<ResultItem data={data[0]} />);
  getByText(data[0].name);
  getByText(data[0].email);
  getByText(`${data[0].samples[0].time} ${data[0].samples[0].value}`);
});
