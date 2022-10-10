import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  ACT_LOGOUT,
  USER_SUCCESS,
  USER_FAILED,
  DRIVER_SUCCESS,
  DRIVER_FAILED,
  ADMIN_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";

const API_URL = process.env.REACT_APP_API_URL;

export const postLogin = (username, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/account/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postLoginSuccess(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};

export const postRegister = (username, name, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/account/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        name,
        password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        NotificationManager.success("Registration is successful, please login");
      })
      .catch((err) => {
        dispatch(stopLoading());
        console.log(err);
        NotificationManager.error(err.response.data.message);
      });
  };
};

export function actLogout() {
  return {
    type: ACT_LOGOUT,
  };
}

export const putUpdateProfile = (
  user,
  profileImageUrl,
  coverImageUrl,
  reload,
  setReload
) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "PUT",
      url: `${API_URL}/account`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: user.id,
        name: user.name,
        gender: user.gender,
        birthDate: user.birthDate,
        glpx: user.glpx,
        email: user.email,
        phone: user.phone,
        avatar: profileImageUrl,
        thumnail: coverImageUrl,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        NotificationManager.success(res.data);
        setReload(!reload);
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const putUpdateDriver = (
  account_Id,
  numberDrivingLicense,
  name,
  birthDate,
  imageFront,
  reload,
  setReload
) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/account/driver`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        account_Id,
        numberDrivingLicense,
        name,
        birthDate,
        imageFront,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        NotificationManager.success(res.data);
        setReload(!reload);
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/account/${id}`,
      data: null,
    })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getUserFailed(err));
        dispatch(stopLoading());
      });
  };
};
export const getUserSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

const getUserFailed = (err) => {
  return {
    type: USER_FAILED,
    payload: err,
  };
};

export const getAdmin = (id) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/account/${id}/`,
      data: null,
    })
      .then((res) => {
        dispatch(getAdminSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAdminSuccess = (admin) => {
  return {
    type: ADMIN_SUCCESS,
    payload: admin,
  };
};

export const getDriver = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/account/driver/${id}`,
      data: null,
    })
      .then((res) => {
        dispatch(getDriverSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getDriverFailed(err));
        dispatch(stopLoading());
      });
  };
};
export const getDriverSuccess = (driver) => {
  return {
    type: DRIVER_SUCCESS,
    payload: driver,
  };
};

const getDriverFailed = (err) => {
  return {
    type: DRIVER_FAILED,
    payload: err,
  };
};
