import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  ACT_LOGOUT,
  USER_SUCCESS,
  USER_FAILED,
  DRIVER_SUCCESS,
  DRIVER_FAILED,
  ADMIN_SUCCESS,
  CAR_BY_USER_SUCCESS,
  CAR_BY_USER_FAILED,
} from "../constants/user.const";

const initialState = {
  user:
    JSON.parse(localStorage.getItem("jwtToken")) ||
    JSON.parse(localStorage.getItem("userLogin"))
      ? JSON.parse(localStorage.getItem("jwtToken")) ||
        JSON.parse(localStorage.getItem("userLogin"))
      : null,
  users: null,
  driver: null,
  carByUser: null,
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
    case DRIVER_SUCCESS: {
      return { ...state, driver: payload };
    }
    case DRIVER_FAILED: {
      return { ...state, errors: payload };
    }
    case CAR_BY_USER_SUCCESS: {
      return { ...state, carByUser: payload };
    }
    case CAR_BY_USER_FAILED: {
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
