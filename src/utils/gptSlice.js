import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: false,
  reducers: {
    addgpt: (state, action) => {
      return !state;
    }
  },
});

export const {addgpt} = gptSlice.actions;
export default gptSlice.reducer;
