import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../movie/categories';
import detailsReducer from '../movie/details';
import MovieReducer from '../movie/movieAPI';

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    details: detailsReducer,
    categories: categoryReducer,
  },
});
export default store;
