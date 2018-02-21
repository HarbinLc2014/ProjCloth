import wilddog from 'wilddog';
import { FETCH_NOTIFICATION, ADD_NOTIFICATION } from './types';

export const fetchNotification = (user) => {
  const config = {
   authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
   syncURL: 'https://wd7622364344zejjra.wilddogio.com'
  };
  wilddog.initializeApp(config);
  return (dispatch) => {
      wilddog.sync().ref('/users/' + user.uid + '/notification')
    .on('value', snapshot => {
      dispatch({ type: FETCH_NOTIFICATION, payload: snapshot.val() });
    });
  };
};

export const addNotification = ({ notification, user }) => {
  const config = {
  authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
  syncURL: 'https://wd7622364344zejjra.wilddogio.com'
 };
 wilddog.initializeApp(config);
 return (dispatch) => {
 wilddog.sync().ref('/users/' + user.uid + '/notification')
      .child(notification.uid).set({ date: notification.date, message: notification.message, uid: notification.uid })
      .then(() => {
        dispatch({ type: ADD_NOTIFICATION, payload: '123' });
      });
  };
};
