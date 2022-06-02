/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import Spinner from '../../../src/components/Spinner';

it('Check spinner is visible', () => {
  const {getByTestId} = render(<Spinner visible="loading" />);
  getByTestId('spinner');
});

it('Check spinner is not visible', () => {
  const {queryByTestId} = render(<Spinner />);
  expect(queryByTestId('spinner')).toBeNull();
});
