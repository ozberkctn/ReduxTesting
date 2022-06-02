import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {material} from 'react-native-typography';

interface Props {
  title: string;
}

const Header = ({title}: Props) => (
  <Text style={styles.headerStyle}>{title}</Text>
);

const styles = StyleSheet.create({
  headerStyle: {
    ...material.headlineObject,
  },
});

export default Header;
