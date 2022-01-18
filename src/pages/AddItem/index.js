import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {saveEntry, deleteEntry} from '../../services/Entries';
import {LottieComponent} from '../../components';
import assets from '../../assets/assets';
import Colors from '../../styles/Colors';

const gif = assets.gif1;
const colors = Colors;

const AddItem = ({route, navigation}) => {
  let date = new Date();
  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        product: '',
        amount: '',
        entryAt: date.toString(),
      };

  const [product, setProduct] = useState(entry.product);
  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) > 0 && product !== '') {
      return true;
    } else {
      return false;
    }
  };

  const onClose = () => {
    navigation.navigate({
      name: 'Main',
      params: {update: true},
      merge: true,
    });
  };

  const onSave = async () => {
    date = new Date();
    const value = {
      id: entry.id,
      product: product,
      amount: parseFloat(amount),
      entryAt: date.toString(),
    };

    console.log('NewEntry :: save: ', value);
    await saveEntry(value);
    setProduct('');
    setAmount('');
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.animation}>
          <LottieComponent gif={gif} loop={true} />
        </View>
        {entry.id === null ? (
          <Text style={styles.pageTitle}>Adicionar Produto</Text>
        ) : (
          <Text style={styles.pageTitle}>Atualizar Produto</Text>
        )}
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
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={[styles.button, isValid() ? styles.isValid : '']}
            onPress={() => {
              isValid() && onSave();
            }}>
            {entry.id === null ? (
              <Text style={styles.buttonText}>Adicionar Produto</Text>
            ) : (
              <Text style={styles.buttonText}>Atualizar Produto</Text>
            )}
          </TouchableOpacity>
          {entry.id !== null && (
            <TouchableOpacity
              style={[styles.removeButton, styles.isValid]}
              onPress={onDelete}>
              <Text style={styles.buttonText}>Remover Produto</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    backgroundColor: colors.white,
    padding: 20,
    margin: 20,
    borderRadius: 30,
  },
  animation: {
    height: '20%',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginHorizontal: 10,
    padding: 10,
    height: 50,
    marginTop: 10,
    backgroundColor: colors.primaryLowOpacity,
  },
  removeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginHorizontal: 10,
    padding: 10,
    height: 50,
    marginTop: 10,
    backgroundColor: colors.darkRed,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelText: {
    color: colors.blue,
  },
  isValid: {
    backgroundColor: colors.darkGreen,
  },
  isRValid: {
    backgroundColor: colors.secondaryLowOpacity,
  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    margin: 20,
  },
  input: {
    fontSize: 18,
    color: colors.black,
  },
});

export default AddItem;
