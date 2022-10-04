import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import commonReducer from "./common.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
});

export default rootReducer;
