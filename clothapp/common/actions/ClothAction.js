import { LIKE_CLOTH, VIEW_CLOTH } from './types';

export const likeCloth = (cloth) => {
  console.log('llll');
  return {
    payload: cloth,
    type: LIKE_CLOTH
  };
};

export const viewCloth = (cloth) => {
  console.log('viewed');
  return {
    payload: cloth,
    type: VIEW_CLOTH
  };
};
