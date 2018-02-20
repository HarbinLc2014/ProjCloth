import { FETCH_ORDER } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER:
    if (action.payload !== null) {
    console.log(action.payload);
          return action.payload;
        }
        return state;
    default:
        return state;
  }
};
