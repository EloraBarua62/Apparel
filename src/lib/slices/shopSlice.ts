import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const createShop = createAsyncThunk(
  "shop/createShop",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/shop/create", info, {
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
export const listDisplay = createAsyncThunk(
  "shops/listDisplay",
  async (_, { rejectWithValue, fulfillWithValue }: StatusCheckingProps) => {
    try {
      const { data } = await api.get("/shop/list-display", {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface CounterSlice {
  successMessage: string,
  errorMessage: string,
  isLoading: boolean,
  shopInfo: Array<object>,
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  shopInfo: [],
};
export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Signup action
    builder.addCase(createShop.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createShop.fulfilled, (state, { payload }) => {
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(createShop.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });

    // Display shop
    builder.addCase(listDisplay.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(listDisplay.fulfilled, (state, { payload }) => {
      state.shopInfo = payload.shop_list;
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(listDisplay.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
  },
});

export const { messageClear } = shopSlice.actions;
export default shopSlice.reducer;
