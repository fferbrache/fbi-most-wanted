import { ADD_TIP } from '../action-types/tip-action-types';

export const addTip = (dispatch, tips) => {
  return dispatch({
    type: ADD_TIP,
    payload: tips,
  });
};