import { DISPLAY_KIDNAPPER } from '../action-types/kidnapping-action-types';

export const displayKidnappers = (dispatch) => {
  return dispatch({
    type: DISPLAY_KIDNAPPER,
  });
};