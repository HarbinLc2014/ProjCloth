import { FETCH_NOTIFICATION, ADD_NOTIFICATION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_NOTIFICATION:
      return action.payload;
    case ADD_NOTIFICATION:
      return state;
    default:
      return state;
  }
}
