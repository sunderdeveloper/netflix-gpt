import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    MovieNames: null,
    MoviesResult: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { MovieNames, MoviesResult } = action.payload;
      state.MovieNames = MovieNames;
      state.MoviesResult = MoviesResult;
    },
  },
});

export const { toggleGptSearch, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
