import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderWithProviders from '../../utils/test-utils';
import store from '../../redux/configureStore/configureStore';
import Home from '../pages/Home';
import Header from '../Header';

describe(Home, () => {
  it('Should have the Nav', () => {
    renderWithProviders(
      <BrowserRouter>
        <Provider store={store}>
          <Home />

        </Provider>

      </BrowserRouter>,
    );
    const movie = screen.getByText('Movie by Genres');

    expect(movie).toBeInTheDocument();
  });

  it('Should have the character header.', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const storeList = await screen.findByText('Home');
    expect(storeList).toBeInTheDocument();
  });

  it('Should have text in search bar', () => {
    renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const searchBar = screen.getByPlaceholderText('Search movies here');
    expect(searchBar).toBeInTheDocument();
  });
});
