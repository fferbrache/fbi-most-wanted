import { DISPLAY_CASE } from '../action-types/case-action-types';

export const displayCases = (dispatch) => {
  return dispatch({
    type: DISPLAY_CASE,
  });
};