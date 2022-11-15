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
  SET_UPDATE_PRICE,
  SET_UPDATE_FUEL,
  SET_UPDATE_DESCRIPTION,
  SET_UPDATE_TRANSMISSION,
  SET_UPDATE_SALE_WEEK,
  SET_UPDATE_SALE_MONTH,
  SET_UPDATE_LONGITUDE,
  SET_UPDATE_LATITUDE,
  SET_UPDATE_STREET,
  SET_UPDATE_WARD,
  SET_UPDATE_FEATURES,
  SET_UPDATE_CAR_IMAGE,
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
  updateCar: {
    price: 0,
    fuel: "Xăng",
    description: null,
    transmission: "Số tự động",
    saleWeek: 0,
    saleMonth: 0,
    longitude: null,
    latitude: null,
    ward: {
      id: 145,
    },
    street: "",
    carImagesUpdate: [],
    featuresUpdate: [],
  },
  feature: null,
  brand: [],
  errors: {},
};

const carReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_UPDATE_PRICE: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          price: payload,
        },
      };
      return newTripSate;
    }

    case SET_UPDATE_FUEL: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          fuel: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_DESCRIPTION: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          description: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_TRANSMISSION: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          transmission: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_SALE_WEEK: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          saleWeek: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_SALE_MONTH: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          saleMonth: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_LONGITUDE: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          longitude: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_LATITUDE: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          latitude: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_STREET: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          street: payload,
        },
      };
      return newTripSate;
    }
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
    case SET_UPDATE_WARD: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          ward: { id: payload },
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_CAR_IMAGE: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          carImagesUpdate: payload,
        },
      };
      return newTripSate;
    }
    case SET_UPDATE_FEATURES: {
      const newTripSate = {
        ...state,
        updateCar: {
          ...state.updateCar,
          featuresUpdate: payload,
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
