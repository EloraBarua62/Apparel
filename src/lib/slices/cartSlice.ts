import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { PayloadAction } from "@reduxjs/toolkit";
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    const existingState = localStorage.getItem("cartState");
    if (existingState) {
      const parsedState = JSON.parse(existingState);
      const updatedState = [ ...parsedState, ...state ];
      localStorage.setItem("cartState", JSON.stringify(updatedState));
      return;
    }
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};
const saveStateMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  const result = next(action);
  saveToLocalStorage(storeAPI.getState().auth);
  return result;
};
const persistedState = loadFromLocalStorage();
export const addItem = createAsyncThunk(
  "cart/addItem",
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
  cartInfo: Array<object>;
  role: string;
}

const initialState: CounterSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  cartInfo: [],
  role: "",
};
export const cartSlice = createSlice({
  name: "cart",
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
});

export const { messageClear, logOut } = cartSlice.actions;
export default cartSlice.reducer;
