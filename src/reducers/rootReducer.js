import { combineReducers } from "redux";
import tipReducer from './tipReducer';
import caseReducer from './caseReducer';
import terrorismReducer from './terrorismReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ caseReducer, tipReducer, terrorismReducer});

export default rootReducer;