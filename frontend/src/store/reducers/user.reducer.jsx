import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  ACT_LOGOUT,
  USER_SUCCESS,
  USER_FAILED,
  ADMIN_SUCCESS,
} from "../constants/user.const";

const initialState = {
  user:
    JSON.parse(localStorage.getItem("jwtToken")) ||
    JSON.parse(localStorage.getItem("userLogin"))
      ? JSON.parse(localStorage.getItem("jwtToken")) ||
        JSON.parse(localStorage.getItem("userLogin"))
      : null,
  users: null,
  admin: null,
  errors: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, user: payload };
    }
    case LOGIN_FAILED: {
      return { ...state, errors: payload };
    }
    case USER_SUCCESS: {
      return { ...state, users: payload };
    }
    case USER_FAILED: {
      return { ...state, errors: payload };
    }
    case ADMIN_SUCCESS: {
      return { ...state, admin: payload };
    }
    case ACT_LOGOUT:
      localStorage.removeItem("userLogin");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
