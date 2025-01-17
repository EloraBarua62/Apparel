import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// Api: create new sub-category
export const createSubCategory = createAsyncThunk(
  "sub-category/createSubCategory",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/sub-category/create", info, {
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
export const subcategoryList = createAsyncThunk(
  "sub-category/subcategoryList",
  async (_, { rejectWithValue, fulfillWithValue }: StatusCheckingProps) => {
    try {     
      const { data } = await api.get(`/sub-category/list-display`, {
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
  successMessage: string;
  errorMessage: string;
  isLoading: boolean;
  subCategoryInfo: Array<object>;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  subCategoryInfo: [],
};
export const subCategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Create new category
    builder.addCase(createSubCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSubCategory.fulfilled, (state, { payload }) => {
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(createSubCategory.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
    
    
    // Display category
    builder.addCase(subcategoryList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(subcategoryList.fulfilled, (state, { payload }) => {
      state.subCategoryInfo = payload.sub_category;
      state.successMessage = payload.message;
      state.isLoading = false;
    });
    builder.addCase(subcategoryList.rejected, (state, { payload }) => {
      state.errorMessage = payload.error;
      state.isLoading = false;
    });
  },
});

export const { messageClear } = subCategorySlice.actions;
export default subCategorySlice.reducer;
