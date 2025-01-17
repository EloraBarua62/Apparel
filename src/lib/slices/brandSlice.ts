import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// Api: create new brand
export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/brand/create", info, {
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
export const allBrand = createAsyncThunk(
  "brand/allBrand",
  async (_, { rejectWithValue, fulfillWithValue }: StatusCheckingProps) => {
    try {
      const { data } = await api.get("/brand/list-display", {
        withCredentials: true,
      });
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
  brandInfo: Array<object>;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  brandInfo: [],
};
export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Create new brand
    builder.addCase(createBrand.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBrand.fulfilled, (state, { payload }) => {
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(createBrand.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });

    // // Create new brand
    // builder.addCase(createSubbrand.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(createSubCategory.fulfilled, (state, { payload }) => {
    //   state.successMessage = payload.message;
    //   state.isLoading = false;
    // });
    // builder.addCase(createSubCategory.rejected, (state, { payload }) => {
    //   state.errorMessage = payload.error;
    //   state.isLoading = false;
    // });

    // // Display category
    builder.addCase(allBrand.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(allBrand.fulfilled, (state, { payload }) => {
      state.brandInfo = payload.brand_list;
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(allBrand.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
  },
});

export const { messageClear } = brandSlice.actions;
export default brandSlice.reducer;