import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from '../movie/details';
import MovieReducer from '../movie/movieAPI';

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    details: detailsReducer,
  },
});
export default store;
