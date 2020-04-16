export const SET_MOCK = "SET_MOCK";
export const BUY_PRODUCT = "BUY_PRODUCT";

export const setMock = (dataMock) => ({
  type: SET_MOCK,
  data: dataMock,
});

export const buyProduct = (product) => ({
  type: BUY_PRODUCT,
  purchased: product,
});
