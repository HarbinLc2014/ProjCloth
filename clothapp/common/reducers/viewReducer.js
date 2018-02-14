import _ from 'lodash';
import { VIEW_CLOTH } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case VIEW_CLOTH:
      console.log('viewed');
      return _.uniqBy([
        action.payload, ...state], 'id');
    default:
      return state;
  }
}
