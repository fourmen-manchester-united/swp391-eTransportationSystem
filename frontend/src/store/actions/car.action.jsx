import axios from "axios";
import { startLoading, stopLoading } from "../actions/common.action";
import { NotificationManager } from "react-notifications";
import {
  FEATURE_FAILED,
  FEATURE_SUCCESS,
  BRAND_FAILED,
  BRAND_SUCCESS,
  SET_UPDATE_FEATURES,
  SET_UPDATE_CAR_IMAGE,
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
        history.push("/myCarRegisterMode");
        NotificationManager.success("Xe đã được thêm thành công");
      })
      .catch((err) => {
        dispatch(stopLoading());
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const updateCarAct = (updateCar, carDetail) => {
  carDetail.features.map((features) => delete features["name"]);
  carDetail.features.map((features) => delete features["icon"]);
  // console.log(
  //   "==",
  //   JSON.stringify({
  //     id: carDetail.id,
  //     price: carDetail.price,
  //     fuel: carDetail.fuel,
  //     description: carDetail.description,
  //     transmission: carDetail.transmission,
  //     saleWeek: carDetail.saleWeek,
  //     saleMonth: carDetail.saleMonth,
  //     longitude: carDetail.longitude,
  //     latitude: carDetail.latitude,
  //     ward: {
  //       id: 145,
  //     },
  //     street: "",
  //     carImagesUpdate:
  //       updateCar.carImagesUpdate.length > 0
  //         ? updateCar.carImagesUpdate
  //         : carDetail.carImages,
  //     featuresUpdate:
  //       updateCar.featuresUpdate.length > 0
  //         ? updateCar.featuresUpdate
  //         : carDetail.features,
  //   })
  // );
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "PUT",
      url: `${API_URL}/car`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        id: carDetail.id,
        price: updateCar.price > 0 ? updateCar.price : carDetail.price,
        fuel: carDetail.fuel,
        description: updateCar.description
          ? updateCar.description
          : carDetail.description,
        transmission: carDetail.transmission,
        saleWeek:
          updateCar.saleWeek > 0 ? updateCar.saleWeek : carDetail.saleWeek,
        saleMonth:
          updateCar.saleMonth > 0 ? updateCar.saleMonth : carDetail.saleMonth,
        longitude: carDetail.longitude,
        latitude: carDetail.latitude,
        ward: {
          id: 145,
        },
        street: "",
        carImagesUpdate:
          updateCar.carImagesUpdate.length > 0
            ? updateCar.carImagesUpdate
            : carDetail.carImages,
        featuresUpdate:
          updateCar.featuresUpdate.length > 0
            ? updateCar.featuresUpdate
            : carDetail.features,
      }),
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch({
          type: SET_UPDATE_CAR_IMAGE,
          payload: [],
        });
        dispatch({
          type: SET_UPDATE_FEATURES,
          payload: [],
        });
        NotificationManager.success("Cập nhật xe thành công");
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

export const getListCarActive = (
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
      url: `${API_URL}/car?page=${page}&size=8`,
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
export const deleteLike = (id, setHandleGrant) => {
  const userLogin = localStorage.getItem("userLogin");
  const userId = userLogin ? JSON.parse(userLogin).id : 0;
  return () => {
    axios({
      method: "DELETE",
      url: `${API_URL}/like`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        account: {
          id: userId,
        },
        car: {
          id,
        },
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
        discription: "",
        startDate,
        endDate,
      },
    })
      .then((res) => {
        NotificationManager.success(res.data);
        dispatch(stopLoading());
      })
      .catch((err) => {
        NotificationManager.error("chưa nhập mã code khuyến mãi");
        dispatch(stopLoading());
      });
  };
};
export const getListCar = (page, setUserList, setTotalPages, setLoading) => {
  return (dispatch) => {
    setLoading(true);
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
        setUserList(res.data.contends);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const putCar = (id, status, setHandleGrant) => {
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/admin/browsing/car`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { id, status },
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
export const deleteCar = (id, setHandleGrant) => {
  return () => {
    axios({
      method: "DELETE",
      url: `${API_URL}/car/${id}`,
      headers: {
        "Content-Type": "application/json",
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
export const cancelCar = (id, setHandleGrant) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${API_URL}/book/cancel/${id}`,
      headers: {
        "Content-Type": "application/json",
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
export const extendCar = (id, endDate, setHandleGrant) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${API_URL}/book/extend`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
        endDate,
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
export const review = (id, content, starReview, setHandleGrant) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${API_URL}/book/review`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        book: {
          id,
        },
        content,
        starReview,
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
