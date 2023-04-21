import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductService from "../../services/product";
import { ProductType } from "../../utils/types";

type InitialState = {
  product: { isLoading: boolean; data: ProductType };
};

const initialState: InitialState = {
  product: {
    isLoading: false,
    data: {
      picture: "",
      name: "",
      description: "",
      investmentEffort: "",
      type: { name: "" },
      categories: [],
      businessModels: [],
      trl: { name: "" },
      video: "",
      user: {
        email: "",
        firstName: "",
        id: 0,
        lastName: "",
        position: "",
        profilePicture: "",
        sex: 0,
      },
      company: {
        name: "",
        logo: "",
        address: {
          city: { name: "" },
          country: { name: "" },
          house: "",
          latitude: "",
          longitude: "",
          street: "",
          zipCode: "",
        },
      },
    },
  },
};
// GET PRODUCT
export const getProduct: any = createAsyncThunk("product/get", () => {
  return ProductService.getProduct();
});

export const product = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductType>) => {
      state.product.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.product.isLoading = true;
    });
    builder.addCase(
      getProduct.fulfilled,
      (state, action: PayloadAction<ProductType>) => {
        state.product.isLoading = false;
        console.log(action.payload);
        state.product.data = action.payload;
      }
    );
    builder.addCase(getProduct.rejected, (state) => {
      state.product.isLoading = false;
    });
  },
});

export const { setProduct } = product.actions;

export default product.reducer;
