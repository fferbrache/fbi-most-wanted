import { combineReducers } from "redux";
import mostWantedReducer from './mostWantedReducer';
import terrorismReducer from './terrorismReducer';
import kidnapperReducer from './kidnapperReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ mostWantedReducer, terrorismReducer, kidnapperReducer});

export default rootReducer;