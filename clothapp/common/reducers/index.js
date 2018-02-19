import { combineReducers } from 'redux';
import ClothReducer from './ClothReducer';
import likeReducer from './likeReducer';
import sourceReducer from './source';
import viewReducer from './viewReducer';
import orderReducer from './OrderReducer';
import authReducer from './AuthReducer';

export default combineReducers({
  clothes: ClothReducer,
  likedClothes: likeReducer,
  source: sourceReducer,
  viewedClothes: viewReducer,
  orders: orderReducer,
  auth: authReducer
});
