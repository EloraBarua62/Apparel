import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// Api: create new product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/product/create", info, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// API call: Display category
type StatusCheckingProps = {
  rejectWithValue: Function;
  fulfillWithValue: Function;
};
export const allProduct = createAsyncThunk(
  "product/allProduct",
  async (
    info: {
      category_id: number[];
      size: number[];
      color: string[];
      rating: number[];
      brand_id: number[];
      query: string;
    },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { category_id, size, color, rating, brand_id, query } = info;
      const { data } = await api.get(
        `/product/list-display?categories=${category_id.join(
          ","
        )}&sizes=${size.join(",")}&colors=${color.join(
          ","
        )}&ratings=${rating.join(",")}&brands=${brand_id.join(
          ","
        )}&query=${query}`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface CounterSlice {
  successMessage: string;
  errorMessage: string;
  isLoading: boolean;
  productInfo: Array<object>;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  productInfo: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Create new product
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(createProduct.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });

    builder.addCase(allProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(allProduct.fulfilled, (state, { payload }) => {
      let keep_product = payload.product_list;
      let keep_color_list = [], keep_image_list = [];
      
      for(let element of keep_product){
        keep_color_list = JSON.parse(element.color);
        element.color = keep_color_list;

        keep_image_list = JSON.parse(element.product_image);
        element.product_image = keep_image_list;
      }

      console.log(keep_product);
      state.productInfo = keep_product;     
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(allProduct.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
  },
});

export const { messageClear } = productSlice.actions;
export default productSlice.reducer;
