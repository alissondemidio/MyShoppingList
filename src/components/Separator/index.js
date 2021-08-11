import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
});

export default Separator;
