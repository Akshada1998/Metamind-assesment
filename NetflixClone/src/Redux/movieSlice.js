import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    toggle:false,
    open: false,
    TrailerMovies: null,
    NowPlayingMovies: null,
    PopularMovies: null,
    UpcomingMovies: null,
    WatchListMovies: null,
    TopRatedMovies: null,
    TrailerMovies: null,
  },
  reducers: {
    //action
    getNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    getWatchListMovies: (state, action) => {
      state.WatchListMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
   setToggle:(state)=>{
    state.toggle = !state.toggle
   },
    getTrailerMovies: (state, action) => {
      state.TrailerMovies = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getID: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getWatchListMovies,
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getTrailerMovies,
  setToggle,
  setOpen,
  getID,
} = movieSlice.actions;
export default movieSlice.reducer;
