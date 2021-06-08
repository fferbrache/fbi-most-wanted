import { ADD_A_TIP } from '../action-types/tip-action-types';

export const addATip = (dispatch, cases) => {
  return dispatch({
    type: ADD_A_TIP,
    payload: cases,
  });
};