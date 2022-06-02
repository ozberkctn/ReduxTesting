/**
 * @format
 */

import React from 'react';
import {renderWithProviders} from '../../../testUtils';
import 'react-native';
import '@testing-library/jest-native';
import {strings} from '../../../../strings';
import ResultsScreen from '../../../../src/screens/ResultsScreen/ResultsScreen';
import data from './ResultItemData';

const initialState = {
  api: {
    results: data,
  },
};
it('Data information renders correctly', async () => {
  let getByTestId: any;
  let getByText: any;

  ({getByText, getByTestId} = renderWithProviders(
    <ResultsScreen />,
    initialState,
  ));

  await getByText(strings.results_title);
  await getByTestId('results_list');
});
