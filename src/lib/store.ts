import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import shopSlice from "./slices/shopSlice";
import categorySlice from "./slices/categorySlice";
import brandSlice from "./slices/brandSlice";
import subCategorySlice from "./slices/subCategorySlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    shopSlice: shopSlice,
    productSlice: productSlice,
    categorySlice: categorySlice,
    subCategorySlice: subCategorySlice,
    brandSlice: brandSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
