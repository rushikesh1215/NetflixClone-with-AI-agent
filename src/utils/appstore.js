import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviesReducer from "./movieSlice.js"
const appstore = configureStore({
  reducer: {
    user:userReducer,
    movies:moviesReducer
  },
});
export default appstore;
