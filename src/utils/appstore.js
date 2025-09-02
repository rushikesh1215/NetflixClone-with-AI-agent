import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviesReducer from "./movieSlice.js"
import gptReducer from "./gptSlice.js"
const appstore = configureStore({
  reducer: {
    user:userReducer,
    movies:moviesReducer,
    gpt:gptReducer
  },
});
export default appstore;
