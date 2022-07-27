import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../movie/categories';
import detailsReducer from '../movie/details';
import MovieReducer from '../movie/movieAPI';
import searchReducer from '../movie/search';
import loneReducer from '../movie/singlemovie';

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    details: detailsReducer,
    categories: categoryReducer,
    search: searchReducer,
    lone: loneReducer
  },
});
export default store;
