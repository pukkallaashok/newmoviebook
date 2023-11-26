import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moives",
  initialState: {
    nowPlayingData: null,
    popularMovies: null,
    TopRated: null,
    Upcoming: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingData: (state, action) => {
      state.nowPlayingData = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.Upcoming = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingData,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addMovieTrailer,
} = moviesSlice.actions;
export default moviesSlice.reducer;
