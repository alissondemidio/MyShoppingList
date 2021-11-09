import {Alert} from 'react-native';
import {getRealm} from './Realm';
import {sha256} from 'react-native-sha256';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries: ', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async entry => {
  const realm = await getRealm();
  let data = {};
  const hashId = await sha256(entry.entryAt);

  try {
    realm.write(() => {
      data = {
        id: entry.id || hashId,
        product: entry.product,
        amount: entry.amount,
        entryAt: entry.entryAt,
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

export const deleteEntry = async entry => {
  const realm = await getRealm();
  try {
    const entryRealmObject = realm
      .objects('Entry')
      .filtered('id == $0', entry.id)[0];
    realm.write(() => {
      realm.delete(entryRealmObject);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object: ',
      JSON.stringify(entry),
    );
    Alert.alert('Erro ao excluir este lançamento.');
  }
};
