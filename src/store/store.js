import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice";
import { apiSlice } from "./apiSlice";

export default configureStore({
  reducer: {
    products: testReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
