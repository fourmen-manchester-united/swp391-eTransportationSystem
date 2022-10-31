import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import commonReducer from "./common.reducer";
import { modalReducer } from "./modal.reducer";
import carReducer from "./car.reducer";
import mapReducer from "./map.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  car: carReducer,
  common: commonReducer,
  map: mapReducer,
  modal: modalReducer,
});

export default rootReducer;
