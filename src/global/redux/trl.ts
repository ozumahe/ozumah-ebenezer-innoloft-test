import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as TRLService from "../../services/trl";
import { TrlType } from "../../utils/types";

type InitialState = {
  trlList: { isLoading: boolean; data: TrlType[] };
};

const initialState: InitialState = {
  trlList: {
    isLoading: false,
    data: [],
  },
};

export const getTrlList: any = createAsyncThunk("trlList/get", () => {
  return TRLService.getTrlList();
});

export const trl = createSlice({
  name: "Trl",
  initialState: initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<TrlType[]>) => {
      state.trlList.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrlList.pending, (state) => {
      state.trlList.isLoading = true;
    });
    builder.addCase(
      getTrlList.fulfilled,
      (state, action: PayloadAction<TrlType[]>) => {
        state.trlList.isLoading = false;
        console.log(action.payload);
        state.trlList.data = action.payload;
      }
    );
    builder.addCase(getTrlList.rejected, (state) => {
      state.trlList.isLoading = false;
    });
  },
});

export const { setProduct } = trl.actions;

export default trl.reducer;
