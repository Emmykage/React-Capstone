import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { searchedData } from '../redux/movie/search';
import { loneDAta } from '../redux/movie/details';
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
  const getsearch = (e) => {
    const { id } = e.target;

    dispatch(loneDAta(id));
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
            <ul>
              {movies.map((movie) => (
                <li key={movie.show.id}>
                  <Link
                    to="category/detailspage"
                    onClick={getsearch}
                    id={movie.show.id}
                  >
                    {movie.show.name}
                  </Link>
                  {' '}

                </li>
              ))}
            </ul>

          </form>

        </div>

      </nav>

    </header>

  );
};
export default Header;
