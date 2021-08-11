import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';

const Main = () => {
  const item = assets.gif1;

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="My Shopping List"
          subtitle="Add to the list the items you most desire"
        />
      </View>
      <Card item={item} color="#e67e22" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67e22',
  },
  pageHeader: {
    margin: 20,
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default Main;
