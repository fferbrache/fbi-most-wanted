import { ADD_TIP } from '../action-types/tip-action-types';

const initialState = [];

const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIP:
      return [...state, action.payload]
    default:
      return state;
  }
};
export default tipReducer;