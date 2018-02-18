import _ from 'lodash';
import { ADD_ORDER } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ORDER:
      console.log('ADDED');
      return [
        action.payload, ...state
      ];
    default:
      return state;
  }
}
