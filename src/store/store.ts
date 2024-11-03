import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  devTools: true,
});

export default store;
