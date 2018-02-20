import wilddog from 'wilddog';
import { ADD_ORDER, CANCEL_ORDER, FETCH_ORDER } from './types';

export const addOrder = ({ order, user }) => {
  const config = {
  authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
  syncURL: 'https://wd7622364344zejjra.wilddogio.com'
 };
 wilddog.initializeApp(config);
//   console.log(user);
 return (dispatch) => {
 wilddog.sync().ref('/users/' + user.uid + '/orders')
      .push({ date: order.date, name: order.name, code: order.clothcode, price: order.clothprice, type: order.clothtype, phone: order.phone, address: order.address, ps: order.ps, state: order.state, src: order.src, userEmail: user.email })
      .then(() => {
        dispatch({ type: ADD_ORDER });
      });
  };
};

export const cancelOrder = (order) => {
  console.log('canceled');
  return {
    payload: order,
    type: CANCEL_ORDER
  };
};

export const fetchOrder = (user) => {
  const config = {
   authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
   syncURL: 'https://wd7622364344zejjra.wilddogio.com'
  };
  wilddog.initializeApp(config);
  return (dispatch) => {
      wilddog.sync().ref('/users/' + user.uid + '/orders')
    .on('value', snapshot => {
      dispatch({ type: FETCH_ORDER, payload: snapshot.val() });
    });
  };
};
