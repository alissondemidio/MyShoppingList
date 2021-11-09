import React, {useState, useCallback} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import LottieComponent from '../LottieComponent';
import {getEntries} from '../../services/Entries';

const Card = ({gif, color, buttonText, navigation}) => {
  const [entries, setEntries] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadEntries = async () => {
    const data = await getEntries();
    setEntries(data);
  };

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const data = await getEntries();
        setEntries(data);
      }
      fetchData();
    }, []),
  );

  function onRefresh() {
    setIsRefreshing(true);
    loadEntries();
    setIsRefreshing(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieComponent gif={gif} loop={true} />
      </View>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <View style={styles.shoppingList}>
            <View style={styles.category} />
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  const entriesToJSON = JSON.parse(JSON.stringify(item));
                  navigation.navigate('AddItem', {
                    entry: entriesToJSON,
                  });
                }}>
                <Text
                  style={[styles.title, item.check ? styles.titleChecked : '']}>
                  {item.product}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const entriesToJSON = JSON.parse(JSON.stringify(item));
                  navigation.navigate('AddItem', {
                    entry: entriesToJSON,
                  });
                }}>
                <Text
                  style={[styles.title, item.check ? styles.titleChecked : '']}>
                  R$ {parseFloat(item.amount).toFixed(2)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: color}]}
        onPress={() => {
          navigation.navigate('AddItem');
        }}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    margin: 20,
    marginBottom: 30,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  animation: {
    height: '20%',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: '80%',
    height: '10%',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  category: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    marginRight: 20,
    borderRadius: 400,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shoppingList: {
    borderBottomWidth: 1,
    borderBottomColor: '#f66',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'stretch',
  },
  titleChecked: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  input: {
    fontSize: 18,
    color: '#000',
  },
});

export default Card;
