import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product";
import trlReducer from "../redux/trl";
import appConfigurationReducer from "../redux/appConfiguration";

const store = configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
    appConfiguration: appConfigurationReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
