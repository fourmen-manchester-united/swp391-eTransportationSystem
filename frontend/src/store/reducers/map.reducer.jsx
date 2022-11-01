import { SET_LOCATION } from "../constants/map.const";

const initialState = {
  location: null,
};

const mapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
