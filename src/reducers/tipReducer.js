import { ADD_A_TIP } from '../action-types/tip-action-types';

const initialState = [];
const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_TIP:
      const newTip = [...state, action.payload];
      return newTip
    default:
      return state;
  }
};
export default tipReducer;