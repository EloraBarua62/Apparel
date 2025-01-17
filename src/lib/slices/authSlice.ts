import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (info: object, { rejectWithValue, fulfillWithValue }) => {
    console.log(info)
    try {
      const { data } = await api.post("/user/signup", info, {
        withCredentials: true,
      });
      console.log(data)
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
  userInfo: object;
  role: string;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  userInfo: {},
  role: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    logOut: (state) => {
      state.role = "";
      document.cookie =
        "accessToken=; expires=Thu, 01 Jan 1971 00:00:00 UTC; path=/;";
    },
  },
  extraReducers: (builder) => {
    // Signup action
    builder.addCase(userSignup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {     
      state.errorMessage = payload?.error;
      state.isLoading = false;
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      // state.userInfo = payload?.userInfo;
      // state.role = payload.userInfo.role;
      state.successMessage = payload?.message;
      state.isLoading = false;
    });

    // Login action
    // builder.addCase(userLogin.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(userLogin.rejected, (state, { payload }) => {
    //   state.errorMessage = payload?.error;
    //   state.isLoading = false;
    // });
    // builder.addCase(userLogin.fulfilled, (state, { payload }) => {
    //   state.userInfo = payload?.userInfo;
    //   state.role = returnRole();
    //   state.successMessage = payload?.message;
    //   state.isLoading = false;
    // });
  },
});

export const { messageClear, logOut } = authSlice.actions;
export default authSlice.reducer;
