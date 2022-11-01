import { CLOSE_MODAL, OPEN_MODAL } from "../constants/modal.const";

const initialState = {
  isOpen: false,
  content: null,
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
    default:
      return state;
  }
};
