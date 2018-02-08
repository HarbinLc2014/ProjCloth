import _ from 'lodash';
import { LIKE_CLOTH } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case LIKE_CLOTH:
      console.log('liked');
      return _.uniqBy([
        action.payload, ...state
      ], 'title');
    default:
      return state;
  }
}
