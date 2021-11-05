import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

import {useShoppingList} from '../../hooks';
import {saveEntry} from '../../services/Entries';
import LottieComponent from '../LottieComponent';
import {getEntries} from '../../services/Entries';

const Card = ({gif, color, buttonText, navigation}) => {
  const [product, setProduct] = useState('');
  const [entries, setEntries] = useState([]);
  const [state, addItem, checkItem, removeItem] = useShoppingList();

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();

      console.log(data);
      setEntries(data);
    }

    loadEntries();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieComponent gif={gif} />
      </View>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.shoppingList}>
            <TouchableOpacity
              onPress={() => {
                checkItem(item.id);
              }}>
              <Text
                style={[styles.title, item.check ? styles.titleChecked : '']}>
                {item.product} - R{'$' + item.amount}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddItem');
              }}>
              <Text style={styles.remove}>-</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder={'Product name'}
        placeholderTextColor="#bbb"
        value={product}
        onChangeText={text => setProduct(text)}
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
  shoppingList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f66',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  titleChecked: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  input: {
    fontSize: 18,
    color: '#000',
  },
  remove: {
    color: 'white',
    fontSize: 18,
    margin: 6,
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default Card;
