import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    Movies: null,
    trailer: null,
    trending: null,
    toprated: null,
  },
  reducers: {
    addmovies: (state, action) => {
      state.Movies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
    addToprated: (state, action) => {
      state.toprated = action.payload;
    },
  },
});

export const { addmovies, addTrailer, addTrending, addToprated } =
  moviesSlice.actions;
export default moviesSlice.reducer;
