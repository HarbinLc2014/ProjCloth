import wilddog from 'wilddog';
import { ADD_FAVORITE, DEL_FAVORITE, FETCH_FAVORITE, VIEW_CLOTH } from './types';

export const likeCloth = ({ favorite, user }) => {
    const config = {
    authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
    syncURL: 'https://wd7622364344zejjra.wilddogio.com'
   };
   wilddog.initializeApp(config);
   return (dispatch) => {
   wilddog.sync().ref('/users/' + user.uid + '/favorite')
        .child(favorite.id).set({ code: favorite.code, price: favorite.price, type: favorite.type, src: favorite.src, uid: favorite.uid, id: favorite.id })
        .then(() => {
          dispatch({ type: ADD_FAVORITE });
        });
    };
  };

export const delFavorite = ({ favorite, user }) => {
  const config = {
  authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
  syncURL: 'https://wd7622364344zejjra.wilddogio.com'
 };
 wilddog.initializeApp(config);
 return (dispatch) => {
 wilddog.sync().ref('/users/' + user.uid + '/favorite')
      .child(favorite.id).remove()
      .then(() => {
        dispatch({ type: DEL_FAVORITE });
      });
};
};
export const viewCloth = (cloth) => {
  console.log('viewed');
  return {
    payload: cloth,
    type: VIEW_CLOTH
  };
};

export const fetchFavorite = (user) => {
  if(user) {
  const config = {
   authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
   syncURL: 'https://wd7622364344zejjra.wilddogio.com'
  };
  wilddog.initializeApp(config);
  return (dispatch) => {
      wilddog.sync().ref('/users/' + user.uid + '/favorite')
    .on('value', snapshot => {
      dispatch({ type: FETCH_FAVORITE, payload: snapshot.val() });
    });
  };
}
 return (dispatch) => { dispatch({ type: FETCH_FAVORITE, payload: {} }); }
};
