import { LIKE_CLOTH } from './types';

export const likeCloth = (cloth) => {
  console.log('llll');
  return {
    payload: cloth,
    type: LIKE_CLOTH
  };
};
