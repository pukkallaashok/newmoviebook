import { createSlice } from "@reduxjs/toolkit";

const AISlice = createSlice({
  name: "AIsearch",
  initialState: {
    toggleAIState: false,
    movieTitle: null,
    movieData: null,
  },
  reducers: {
    addAIsearch: (state) => {
      state.toggleAIState = !state.toggleAIState;
    },
    addMovieResults: (state, action) => {
      const { movieTitle, movieData } = action.payload;
      state.movieTitle = movieTitle;
      state.movieData = movieData;
    },
  },
});

export const { addAIsearch, addMovieResults } = AISlice.actions;
export default AISlice.reducer;
