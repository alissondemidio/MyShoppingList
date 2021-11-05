import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {saveEntry} from '../../services/Entries';
import {LottieComponent} from '../../components';

const AddItem = ({navigation}) => {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');

  const save = () => {
    const value = {
      product: product,
      amount: parseFloat(amount),
      entryAt: new Date(),
    };

    console.log('NewEntry :: save: ', value);
    saveEntry(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieComponent />
      </View>
      <Text>AddItem</Text>
      <TextInput
        style={styles.input}
        placeholder={'Nome do Produto'}
        placeholderTextColor="#bbb"
        value={product}
        onChangeText={text => setProduct(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Preço Médio do Produto'}
        placeholderTextColor="#bbb"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      {/*<TextInput
        style={styles.input}
        placeholder={'Categoria do Produto'}
        placeholderTextColor="#bbb"
        value={category}
        onChangeText={text => setCategory(text)}
      />*/}
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          save();
          setProduct('');
          setAmount('');
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
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
    backgroundColor: 'red',
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

export default AddItem;
