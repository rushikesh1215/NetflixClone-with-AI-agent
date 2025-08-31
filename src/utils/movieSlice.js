import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice(
    {
        name:"movies",
        initialState:{
            Movies:null
        },
        reducers:{
            addmovies:(state,action)=>{
                initialState.Movies=action.payload;
            }
        }
    }
)

export const {addmovies}= moviesSlice.actions;
export default moviesSlice.reducer;