import { ADD_ORDER, CANCEL_ORDER } from './types';

export const addOrder = (order) => {
  console.log('AAAAAAA');
  return {
    payload: order,
    type: ADD_ORDER
  };
};

export const cancelOrder = (order) => {
  console.log('canceled');
  return {
    payload: order,
    type: CANCEL_ORDER
  };
};
