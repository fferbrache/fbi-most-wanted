import { DISPLAY_TERRORIST } from '../action-types/terrorism-action-types';

export const displayTerrorists = (dispatch) => {
  return dispatch({
    type: DISPLAY_TERRORIST,
  });
};