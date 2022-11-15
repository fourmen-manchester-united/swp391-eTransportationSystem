import {
  CLOSE_MODAL,
  OPEN_MODAL,
  CLOSE_BOOK_MODAL,
  OPEN_BOOK_MODAL,
} from "../constants/modal.const";

const initialState = {
  isOpen: false,
  isBookOpen: false,
  content: null,
  contentBook: null,
};
export const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        content: payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case OPEN_BOOK_MODAL:
      return {
        ...state,
        isBookOpen: true,
        contentBook: payload,
      };
    case CLOSE_BOOK_MODAL:
      return {
        ...state,
        isBookOpen: false,
      };
    default:
      return state;
  }
};
