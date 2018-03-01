import wilddog from 'wilddog';
import { ADD_ORDER, CANCEL_ORDER, FETCH_ORDER } from './types';

export const addOrder = ({ order, user }) => {
  const config = {
  authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
  syncURL: 'https://wd7622364344zejjra.wilddogio.com'
 };
 wilddog.initializeApp(config);
 return (dispatch) => {
 wilddog.sync().ref('/users/' + user.uid + '/orders')
      .child(order.uid).set({ date: order.date, name: order.name, code: order.clothcode, price: order.clothprice, type: order.clothtype, phone: order.phone, address: order.address, ps: order.ps, state: order.state, src: order.src, userEmail: user.email, uid: order.uid })
      .then(() => {
        wilddog.sync().ref('/NewOrders')
             .child(order.uid).set({ date: order.date, name: order.name, code: order.clothcode, price: order.clothprice, type: order.clothtype, phone: order.phone, address: order.address, ps: order.ps, state: order.state, src: order.src, userEmail: user.email, uid: order.uid, useruid: user.uid });
        dispatch({ type: ADD_ORDER });
      });
  };
};

export const cancelOrder = ({ order, user }) => {
  const config = {
   authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
   syncURL: 'https://wd7622364344zejjra.wilddogio.com'
  };
  wilddog.initializeApp(config);
  return (dispatch) => {
  wilddog.sync().ref('/users/' + user.uid + '/orders/' + order.uid)
       .remove()
       .then(() => {
         dispatch({ type: CANCEL_ORDER });
       });
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
  //    console.log('snapshot:' + snapshot.val());
      dispatch({ type: FETCH_ORDER, payload: snapshot.val() });
    });
  };
};
