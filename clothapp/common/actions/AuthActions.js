import { EMAIL_CHANGED, LOGIN_USER, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, ADD_ORDER } from './types';
import { addOrder } from './OrderActions';

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

export const resetPassword = (email) => {
  return (dispatch) => {
    wilddog.initializeApp(config);
   wilddog.auth().sendPasswordResetEmail(email)
   .then(() => dispatch({ type: PASSWORD_CHANGED }))
   .catch((error) => {
     loginUserFail(dispatch, String(error), 0)
   });
};
};

export const signOut = () => {
  return (dispatch) => {
    wilddog.initializeApp(config);
    wilddog.auth().signOut();
    dispatch({ type: 'asdasd' });
};
};

export const loginUser = ({ email, password, navigate }) => {
//  console.log('email:' + email);
//  console.log('password:' + password);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

   wilddog.initializeApp(config);
  wilddog.auth().signInWithEmailAndPassword(email, password)
    .then(user =>
      loginUserSuccess(dispatch, user, navigate)
    )
    .catch((error) => {
    /*  console.log(error);
      wilddog.auth().createUserWithEmailAndPassword(email, password)
      .then(user =>
      loginUserSuccess(dispatch, user, navigate));
        })
    .catch((error) => {*/
//    console.log('error:'+error);
    loginUserFail(dispatch, String(error), 0);
  }
  );
//  console.log('error');
};
};

export const signupUser = ({ email, password, navigate }) => {
  return (dispatch) => {
  dispatch({ type: LOGIN_USER });
 wilddog.initializeApp(config);
wilddog.auth().createUserWithEmailAndPassword(email, password)
   .then(user =>
     loginUserSuccess2(dispatch, user, navigate)
   )
   .catch((error) => {
     loginUserFail(dispatch, String(error), 1);
   }
   );
 };
};

const loginUserFail = (dispatch, error, signal) => {
  const sig = signal;
//  console.log('failed: '+ error);
  if(error === 'Error: The specified email address is incorrect.') {
    error = '邮箱格式不正确';
  }
  if (error === 'Error: The email is not exist' || error === 'Error: The specified user does not exist.') {
    error= '用户不存在';
  }
  if (error === 'Error: The specified password is incorrect.') {
    error = '密码不正确'
  }
  if (error === 'Error: Invalid authentication arguments provided.') {
    error = '登录信息不能为空';
  }
  if (error === 'Error: The specified authentication type is not enabled for this Wilddog.') {
    error = '登录信息不能为空';
  }
  if (error === "Error: Password's length must between 6 and 32") {
    error = '密码长度必须在6位到32位之间';
  }
  if (error === 'Error: The email address is already in use by another account.') {
    error = '该用户名已被注册';
  }
dispatch({ type: LOGIN_FAILED, payload: error, signal: sig });
};


const loginUserSuccess = (dispatch, user, navigate) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  navigate('home');
};

const loginUserSuccess2 = (dispatch, user, navigate) => {
  const config2 = {
  authDomain: 'wd7622364344zejjra.wilddog.com.wilddog.com',
  syncURL: 'https://wd7622364344zejjra.wilddogio.com'
 };
 wilddog.initializeApp(config2);
 wilddog.sync().ref('/users/' + user.uid + '/orders')
      .push({ userEmail: '' });
  wilddog.sync().ref('/users/' + user.uid + '/notification')
      .child('123').set({ date: '', message: '', uid: '123' });
  wilddog.sync().ref('/users/' + user.uid + '/favorite')
      .child('xxx').set({ code: '' });
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  navigate('home');
};
