import { createStore } from 'redux';
import reducer from '../reducers/index';

export const initState = {
  cart: [],
  value: 'redux 的数据',
  list: ['1', '2', '3']
}

const store = createStore(reducer)
export default store;
