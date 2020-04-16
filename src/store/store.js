import { createStore } from "redux";
import { dataMock } from "./reducer";

const store = createStore(dataMock);

export default store;
