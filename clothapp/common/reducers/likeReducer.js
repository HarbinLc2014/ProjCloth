import _ from 'lodash';
import { FETCH_FAVORITE } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FAVORITE:
//    console.log('fetching...');
      return action.payload;
    default:
      return state;
  }
}
