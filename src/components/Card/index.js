import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

import {useShoppingList} from '../../hooks';
import LottieComponent from '../LottieComponent';

const Card = ({gif, color, buttonText}) => {
  const [product, setProduct] = useState('');
  const [state, addItem, checkItem, removeItem] = useShoppingList();

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieComponent gif={gif} />
      </View>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.shoppingList}>
            <TouchableOpacity
              onPress={() => {
                checkItem(item.id);
              }}>
              <Text
                style={[styles.title, item.check ? styles.titleChecked : '']}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                removeItem(item.id);
              }}>
              <Text style={styles.remove}>-</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder={'Adicionar Produto'}
        placeholderTextColor="#bbb"
        value={product}
        onChangeText={text => setProduct(text)}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: color}]}
        onPress={async () => {
          addItem(product);
          setProduct('');
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
