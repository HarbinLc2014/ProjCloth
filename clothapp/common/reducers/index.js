import { combineReducers } from 'redux';
import ClothReducer from './ClothReducer';
import likeReducer from './likeReducer';
import sourceReducer from './source';
import viewReducer from './viewReducer';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';
import fetchReducer from './FetchReducer';
import notificationReducer from './NotificationReducer';

export default combineReducers({
  clothes: ClothReducer,
  likedClothes: likeReducer,
  source: sourceReducer,
  viewedClothes: viewReducer,
  orders: orderReducer,
  auth: authReducer,
  fetch: fetchReducer,
  notify: notificationReducer
});
