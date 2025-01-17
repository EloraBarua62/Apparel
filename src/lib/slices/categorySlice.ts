import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// Api: create new category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/category/create", info, {
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
  "category/listDisplay",
  async (_, { rejectWithValue, fulfillWithValue }: StatusCheckingProps) => {
    try {
      const { data } = await api.get("/category/list-display", {
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
  categoryInfo: Array<object>;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  categoryInfo: [],
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Create new category
    builder.addCase(createCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, { payload }) => {
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(createCategory.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });

    
    // Display category
    builder.addCase(listDisplay.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(listDisplay.fulfilled, (state, { payload }) => {
      state.categoryInfo = payload.category_list;
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(listDisplay.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
  },
});

export const { messageClear } = categorySlice.actions;
export default categorySlice.reducer;
