import {useReducer} from 'react';

import {sha256} from 'react-native-sha256';

const initialState = {
  id: '',
  product: '',
  amount: '',
  entryAt: '',
  color: '',
  category: 'Category?',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'CHECK':
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, check: !item.check};
        } else {
          return item;
        }
      });
    case 'REMOVE':
      return state.filter(item => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = async title => {
    const hashId = await sha256(title);
    let date = new Date();

    dispatch({
      type: 'ADD',
      item: {
        id: hashId,
        title: title,
        check: false,
      },
    });
  };

  const checkItem = id => {
    dispatch({
      type: 'CHECK',
      id: id,
    });
  };

  const removeItem = id => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };

  return [state, addItem, checkItem, removeItem];
};
