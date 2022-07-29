import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MovieReducer from '../redux/movie/movieAPI';
import searchReducer from '../redux/movie/search';
import categoryReducer from '../redux/movie/categories';
import detailsReducer from '../redux/movie/details';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        movies: MovieReducer,
        detail: detailsReducer,
        categories: categoryReducer,
        search: searchReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
