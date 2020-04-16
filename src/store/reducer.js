import { SET_MOCK } from "./actions";

export const dataMock = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_MOCK:
      return { ...state, data };
    default:
      return state;
  }
};
