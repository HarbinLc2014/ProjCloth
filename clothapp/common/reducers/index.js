import { combineReducers } from 'redux';
import ClothReducer from './ClothReducer';
import likeReducer from './likeReducer';

export default combineReducers({
  clothes: ClothReducer,
  likedClothes: likeReducer
});
