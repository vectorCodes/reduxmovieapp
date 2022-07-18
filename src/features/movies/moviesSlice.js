import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Api/movieApi";
import { APIKey } from "../../Api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full `);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.shows = payload;
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedMovieOrShow = payload;
    },
  },
});

export const { removeSelectedMovieOrShow } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default moviesSlice.reducer;
