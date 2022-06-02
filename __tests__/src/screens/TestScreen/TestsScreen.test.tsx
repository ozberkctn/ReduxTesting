/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {strings} from '../../../../strings';
import TestsScreen from '../../../../src/screens/TestsScreen/TestsScreen';
import {renderWithProviders} from '../../../testUtils';
import data from './TestItemData';

const initialState = {
  api: {
    tests: data,
  },
};

it('Data information renders correctly', async () => {
  let getByTestId: any;
  let getByText: any;

  ({getByText, getByTestId} = renderWithProviders(
    <TestsScreen />,
    initialState,
  ));

  await getByText(strings.test_title);
  await getByTestId('tests_list');
});
