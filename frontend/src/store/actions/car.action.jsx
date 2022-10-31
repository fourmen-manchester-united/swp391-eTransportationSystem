import axios from "axios";
import { startLoading, stopLoading } from "../actions/common.action";
import { NotificationManager } from "react-notifications";
import {
  FEATURE_FAILED,
  FEATURE_SUCCESS,
  BRAND_FAILED,
  BRAND_SUCCESS,
} from "../constants/car.const";

const API_URL = process.env.REACT_APP_API_URL;

export const saveCar = (car, history) => {
  const userLogin = localStorage.getItem("userLogin");
  const id = userLogin ? JSON.parse(userLogin).id : 0;
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/car`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ...car,
        account: {
          id: id,
        },
      }),
    })
      .then((res) => {
        dispatch(stopLoading());
        history.push("/");
        NotificationManager.success("Car was add successfully");
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const postCar = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/car`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        seats: 0,
        price: 0,
        fuel: "string",
        licensePlates: "string",
        description: "string",
        fuelConsumption: "string",
        transmission: "string",
        yearOfManufacture: "string",
        saleWeek: 0,
        saleMonth: 0,
        longitude: 0,
        latitude: 0,
        account: {
          id: 0,
        },
        model: {
          id: 0,
        },
        ward: {
          id: 0,
        },
        street: "string",
        carImages: [
          {
            image: "string",
          },
        ],
        features: [
          {
            id: 0,
          },
        ],
      },
    })
      .then((res) => {
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const getFeature = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/feature`,
      data: null,
    })
      .then((res) => {
        dispatch(getFeatureSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getFeatureFailed(err));
        dispatch(stopLoading());
      });
  };
};
export const getFeatureSuccess = (feature) => {
  return {
    type: FEATURE_SUCCESS,
    payload: feature,
  };
};

const getFeatureFailed = (err) => {
  return {
    type: FEATURE_FAILED,
    payload: err,
  };
};

export const getBrand = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/car/brand`,
      data: null,
    })
      .then((res) => {
        dispatch(getBrandSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getBrandFailed(err));
        dispatch(stopLoading());
      });
  };
};
export const getBrandSuccess = (brand) => {
  return {
    type: BRAND_SUCCESS,
    payload: brand,
  };
};

const getBrandFailed = (err) => {
  return {
    type: BRAND_FAILED,
    payload: err,
  };
};

export const getListCar = (
  page,
  userList,
  setUserList,
  setTotalPages,
  setLoading
) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/admin/car?page=${page}&size=8`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        setUserList([...userList, ...res.data.contends]);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const putGrant = (id, setHandleGrant) => {
  return () => {
    axios({
      method: "POST",
      url: `${API_URL}/admin/account/role/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        setHandleGrant(id);
        NotificationManager.success(res.data);
        setHandleGrant(null);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const putRevoke = (id, setHandleGrant) => {
  return () => {
    axios({
      method: "DELETE",
      url: `${API_URL}/admin/account/role/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        setHandleGrant(id);
        NotificationManager.success(res.data);
        setHandleGrant(null);
      })
      .catch((err) => {
        console.log("🚀 ~ file: car.action.jsx ~ line 226 ~ return ~ err", err);
        // NotificationManager.error(err.response.data.message);
      });
  };
};

export const putBlock = (id, status, setHandleGrant) => {
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/admin/block/account`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
        status,
      },
    })
      .then((res) => {
        setHandleGrant(id);
        NotificationManager.success(res.data);
        setHandleGrant(null);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const putDriver = (id, status, setHandleGrant) => {
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/admin/browsing/driverLincense`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        account_Id: id,
        status,
      },
    })
      .then((res) => {
        setHandleGrant(id);
        NotificationManager.success(res.data);
        setHandleGrant(null);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const postDriver = (
  code,
  percentage,
  maxDiscount,
  discription,
  startDate,
  endDate
) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: `${API_URL}/admin/voucher`,
      data: {
        code,
        percentage,
        maxDiscount,
        discription,
        startDate,
        endDate,
      },
    })
      .then((res) => {
        NotificationManager.success(res.data);
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log("🚀 ~ file: car.action.jsx ~ line 307 ~ return ~ err", err);
        NotificationManager.error(err.response.data.message);
        dispatch(stopLoading());
      });
  };
};
