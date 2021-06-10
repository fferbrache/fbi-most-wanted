import { DISPLAY_MOST_WANTED } from '../action-types/most-wanted-action-types';

export const displayMostWanted = (dispatch) => {
  return dispatch({
    type: DISPLAY_MOST_WANTED,
  });
};