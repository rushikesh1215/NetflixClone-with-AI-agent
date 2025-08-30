import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
const appstore = configureStore({
  reducer: {
    user:userReducer,
  },
});
export default appstore;
