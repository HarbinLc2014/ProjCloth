import { combineReducers } from 'redux';
import ClothReducer from './ClothReducer';
import likeReducer from './likeReducer';
import sourceReducer from './source';

export default combineReducers({
  clothes: ClothReducer,
  likedClothes: likeReducer,
  source: sourceReducer
});
