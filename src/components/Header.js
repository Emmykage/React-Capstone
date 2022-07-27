import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { searchedData } from '../redux/movie/search';

const Header = () => {
  const movies = useSelector((state) => state.search);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearch(e.target.value);
    clearTimeout(0);
    if (search.trim().length === 0) {
      return;
    }

    setTimeout(() => {
      dispatch(searchedData(e.target.value));
    }, 3000);
  };
  const inputSearch = (e) => {
    e.preventDefault();

    dispatch(searchedData(search));
  };
  return (

    <header>
      <form onSubmit={inputSearch}>

        <input type="search" placeholder="Search here" value={search} onChange={onChange} />
        <button type="submit">search</button>

      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.show.id}>{movie.show.name}</li>
        ))}
      </ul>

    </header>

  );
};
export default Header;
