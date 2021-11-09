import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';
import Colors from '../../styles/Colors';

const colors = Colors;

const Main = ({navigation, route}) => {
  const gif = assets.gif2;
  const buttonText = 'Adicionar Item';

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Sua lista de compras"
          subtitle="Adicione à lista itens que deseja comprar"
        />
      </View>
      <Card
        gif={gif}
        color={colors}
        buttonText={buttonText}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pageHeader: {
    margin: 20,
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default Main;
