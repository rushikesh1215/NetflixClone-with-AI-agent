import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    Movies: null,
    trailer: null,
    trending: null,
    toprated: null,
    gptMovies:null
  },
  reducers: {
    addmovies: (state, action) => {
      state.Movies = action.payload;
    },
    removemovies:(state,action)=>{
      state.Movies=null
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
    addgptsearch:(state,action)=>{
      state.gptMovies=action.payload

    },removegptsearch:(state,action)=>{
      state.gptMovies=null

    }
  },
});

export const { addmovies, removemovies,addTrailer, addTrending, addToprated  , addgptsearch,removegptsearch} =
  moviesSlice.actions;
export default moviesSlice.reducer;
