import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { searchedData } from '../redux/movie/search';
import logo from './image/LOGO.png';

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
      <nav>
        <div className="logo-bx">
          <a className="logo" href="/">
            <img src={logo} alt="" />
            <h1>MovieMania</h1>
          </a>

        </div>

        <div className="searchBar">
          <form onSubmit={inputSearch}>

            <input type="search" placeholder="Search here" value={search} onChange={onChange} />
            <button type="submit">search</button>

          </form>

          <ul>
            {movies.map((movie) => (
              <li key={movie.show.id}>{movie.show.name}</li>
            ))}
          </ul>
        </div>

      </nav>

    </header>

  );
};
export default Header;
