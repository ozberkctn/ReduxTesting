import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {iOSColors, material} from 'react-native-typography';

const Error = ({err}: {err?: string}) =>
  err ? <Text style={styles.errorStyle}>{err}</Text> : null;

const styles = StyleSheet.create({
  errorStyle: {
    ...material.body1Object,
    color: iOSColors.red,
  },
});

export default Error;
