import { ICommonListQuery } from "@common/interfaces";
import { AppState } from "@plugins/redux-toolkit/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../interfaces";
import { productService } from "../services/product.service";

const initialState: IProductState = {
  productList: [],
  getListQuery: {},
  totalItems: 0,
  isLoading: false,
};

export const fetchProductList = createAsyncThunk(
  "tax/fetchProductList",
  async (query: ICommonListQuery) => {
    return await productService.getList(query);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setGetListQuery: (state, action) => {
      state.getListQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload?.data?.items || [];
      state.totalItems = action.payload?.data?.totalItems || 0;
    });
  },
});

export const { setProductList, setGetListQuery } = productSlice.actions;
export const productListStateSelector = (state: AppState) => {
  return state.product;
};

export default productSlice.reducer;
