import React from 'react';
import {View} from 'react-native';
import SpinnerOverlay from 'react-native-loading-spinner-overlay/lib';

interface Props {
  visible?: string;
}

/*Spinner lib is wrapped because of this issue
https://github.com/ladjs/react-native-loading-spinner-overlay/issues/30
*/
export default function Spinner({visible}: Props): JSX.Element | null {
  return visible === 'loading' ? (
    <View testID="spinner">
      <SpinnerOverlay visible={true} />
    </View>
  ) : null;
}
