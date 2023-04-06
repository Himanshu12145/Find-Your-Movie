import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";
import authReducer from "../features/auth";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
