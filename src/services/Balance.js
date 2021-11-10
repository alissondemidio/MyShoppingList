import {getRealm} from './Realm';

export const getBalance = async () => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  let sum = entries.sum('amount');

  return sum.toFixed(2);
};
