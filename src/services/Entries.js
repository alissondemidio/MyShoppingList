import {Alert} from 'react-native';
import {getRealm} from './Realm';
import {sha256} from 'react-native-sha256';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries: ', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async value => {
  const realm = await getRealm();
  let data = {};
  const {product} = value;
  const hashId = await sha256(product);

  try {
    realm.write(() => {
      data = {
        id: hashId,
        product: product,
        amount: 12.4,
      };

      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};
