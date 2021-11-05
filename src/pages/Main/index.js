import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';

const Main = ({navigation}) => {
  const gif = assets.gif1;
  const color = '#e67e22';
  const buttonText = 'Add Item';

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="My Shopping List"
          subtitle="Add to the list the items you most desire"
        />
      </View>
      <Card
        gif={gif}
        color={color}
        buttonText={buttonText}
        navigation={navigation}
      />
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
