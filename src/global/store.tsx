import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/product";
import trlReducer from "./redux/trl";

const store = configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
