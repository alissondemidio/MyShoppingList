import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PageHeader = ({title, subtitle}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default PageHeader;
