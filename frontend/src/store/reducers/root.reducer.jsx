import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import commonReducer from "./common.reducer";
import { modalReducer } from "./modal.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  modal: modalReducer,
});

export default rootReducer;
