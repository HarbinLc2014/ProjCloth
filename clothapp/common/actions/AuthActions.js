import { EMAIL_CHANGED, LOGIN_USER, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED } from './types';
const wilddog = require('wilddog');
var config = {
  authDomain: 'wd7622364344zejjra.wilddog.com'
};
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, navigate }) => {
  console.log('email:' + email);
  console.log('password:' + password);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

   wilddog.initializeApp(config);
  wilddog.auth().signInWithEmailAndPassword(email, password)
    .then(user =>
      loginUserSuccess(dispatch, user, navigate)
    )
    .catch((error) => {
      console.log(error);
      wilddog.auth().createUserWithEmailAndPassword(email, password)
      .then(user =>
      loginUserSuccess(dispatch, user, navigate));
        })
    .catch((error) => {
      console.log(error);
    loginUserFail(dispatch);
  }
  );
};
};

const loginUserFail = (dispatch) => {
  console.log('failed');
dispatch({ type: LOGIN_FAILED, payload: null });
};

const loginUserSuccess = (dispatch, user, navigate) => {
  console.log('success');
wilddog.auth().sendPasswordResetEmail('1826442304@qq.com');
  console.log(wilddog.auth().currentUser);
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  navigate('main');
};
