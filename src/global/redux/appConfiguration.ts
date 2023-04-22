import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as AppConfigurationService from "../../services/appConfiguration";
import { ConfigType } from "../../utils/types";

type InitialState = {
  config: {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
  };
};

const initialState: InitialState = {
  config: {
    id: 1,
    logo: "https://img.innoloft.de/logo.svg",
    mainColor: "#272e71",
    hasUserSection: false,
  },
};
// GET PRODUCT
export const getAppConfiguration: any = createAsyncThunk(
  "appConfig/get",
  () => {
    return AppConfigurationService.getAppConfiguration();
  }
);

export const product = createSlice({
  name: "AppConfig",
  initialState: initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ConfigType>) => {
      state.config = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAppConfiguration.fulfilled,
      (state, action: PayloadAction<ConfigType>) => {
        state.config = action.payload;
      }
    );
  },
});

export const { setProduct } = product.actions;

export default product.reducer;
