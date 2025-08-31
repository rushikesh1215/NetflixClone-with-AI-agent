import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice(
    {
        name:"movies",
        initialState:{
            Movies:null,
            trailer:null
        },
        reducers:{
            addmovies:(state,action)=>{
                state.Movies=action.payload;
            },
            addTrailer:(state,action)=>{
                state.trailer=action.payload;
            }
        }
    }
)

export const {addmovies,addTrailer}= moviesSlice.actions;
export default moviesSlice.reducer;