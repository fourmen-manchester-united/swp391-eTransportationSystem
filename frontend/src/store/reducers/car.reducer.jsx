import {
  SET_SEATS,
  FEATURE_FAILED,
  FEATURE_SUCCESS,
  BRAND_FAILED,
  BRAND_SUCCESS,
  SET_PRICE,
  SET_FUEL,
  SET_LICENSE_PLATES,
  SET_DESCRIPTION,
  SET_TRANSMISSION,
  SET_YEAR_OF_MANUFACTURER,
  SET_SALE_WEEK,
  SET_SALE_MONTH,
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_MODEL,
  SET_WARD,
  SET_CAR_IMAGE,
  SET_FEATURES,
  SET_STREET,
} from "../constants/car.const";
const initialState = {
  car: {
    seats: 4,
    price: 720,
    fuel: "Xăng",
    licensePlates: "",
    description: "",
    transmission: "Số tự động",
    yearOfManufacture: "2001",
    saleWeek: 10,
    saleMonth: 30,
    longitude: null,
    latitude: null,
    model: {
      id: 0,
    },
    ward: {
      id: 0,
    },
    street: "",
    carImages: [
      {
        image: "",
      },
    ],
    features: [],
  },
  feature: null,
  brand: [],
  errors: {},
};

const carReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEATS: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          seats: payload,
        },
      };
      return newTripSate;
    }
    case SET_PRICE: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          price: payload,
        },
      };
      return newTripSate;
    }
    case SET_FUEL: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          fuel: payload,
        },
      };
      return newTripSate;
    }
    case SET_STREET: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          street: payload,
        },
      };
      return newTripSate;
    }
    case SET_LICENSE_PLATES: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          licensePlates: payload,
        },
      };
      return newTripSate;
    }
    case SET_DESCRIPTION: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          description: payload,
        },
      };
      return newTripSate;
    }
    case SET_TRANSMISSION: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          transmission: payload,
        },
      };
      return newTripSate;
    }
    case SET_YEAR_OF_MANUFACTURER: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          yearOfManufacture: payload,
        },
      };
      return newTripSate;
    }
    case SET_SALE_WEEK: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          saleWeek: payload,
        },
      };
      return newTripSate;
    }
    case SET_SALE_MONTH: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          saleMonth: payload,
        },
      };
      return newTripSate;
    }
    case SET_LONGITUDE: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          longitude: payload,
        },
      };
      return newTripSate;
    }
    case SET_LATITUDE: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          latitude: payload,
        },
      };
      return newTripSate;
    }
    case SET_MODEL: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          model: { id: payload },
        },
      };
      return newTripSate;
    }
    case SET_WARD: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          ward: { id: payload },
        },
      };
      return newTripSate;
    }
    case SET_CAR_IMAGE: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          carImages: payload,
        },
      };
      return newTripSate;
    }
    case SET_FEATURES: {
      const newTripSate = {
        ...state,
        car: {
          ...state.car,
          features: payload,
        },
      };
      return newTripSate;
    }
    case FEATURE_SUCCESS: {
      return { ...state, feature: payload };
    }
    case FEATURE_FAILED: {
      return { ...state, errors: payload };
    }
    case BRAND_SUCCESS: {
      return { ...state, brand: payload };
    }
    case BRAND_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default carReducer;
