import { SET_MOCK, BUY_PRODUCT } from "./actions";

const addReducer = (state = {}, action) => {
  const { type, data, purchased } = action;
  switch (type) {
    case SET_MOCK:
      return { ...state, data };
    case BUY_PRODUCT:
      return { ...state, purchased };
    default:
      return state;
  }
};

export default addReducer;
