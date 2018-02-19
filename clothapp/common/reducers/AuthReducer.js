import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_USER
 } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, signinerror: '', signuperror: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
    console.log('asdads');
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_FAILED:
    switch (action.signal) {
      case 0:
            return { ...state, signinerror: action.payload, loading: false };
      case 1:
            return { ...state, signuperror: action.payload, loading: false };
      default:
            return state;
    }
    default:
      return state;
  }
};
