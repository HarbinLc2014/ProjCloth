import { FETCH_ORDER } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER:
    console.log(action.payload);
          return action.payload;
    default:
        return state;
  }
};
