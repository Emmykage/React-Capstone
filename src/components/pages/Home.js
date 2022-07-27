import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux/es/exports';
import { getCategory } from '../../redux/movie/categories';
import { getMovieData } from '../../redux/movie/movieAPI';
import MovieDisplay from '../MovieDisplay';

const Home = () => {
  const movies = useSelector((state) => state.movies, shallowEqual);
  // console.log(movies);

  const action = movies.filter((movie) => movie.genres[0] === 'Action');
  const drama = movies.filter((movie) => movie.genres[0] === 'Drama');
  const horror = movies.filter((movie) => movie.genres[0] === 'Horror');
  const thriller = movies.filter((movie) => movie.genres[0] === 'Thriller');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <main className="page-container row">

      <div className=" home-contain row">
        {movies.map((movie) => (
          <MovieDisplay
            key={movie.id}
            name={movie.name}
            description={movie.summary}
            image={movie.image.medium}
            released={movie.premiered}
            rating={movie.rating.average}
          />
        ))}

      </div>
      <div className="categories">
        <ul>
          <h2>Categories</h2>
          <li>
            <Link to="category" className="action category" onClick={() => { dispatch(getCategory(action)); }}>
              <>
                Action(
                {action.length}
                )
                {' '}
              </>
            </Link>
          </li>
          <li>
            <Link to="category" className="drama category" onClick={() => { dispatch(getCategory(drama)); }}>
              <>
                Drama(
                {drama.length}
                )
              </>
            </Link>
          </li>
          <li>
            <Link to="category" className="thriller category" onClick={() => { dispatch(getCategory(thriller)); }}>
              Thriller(
              {thriller.length}
              )
            </Link>
          </li>
          <li>
            <Link to="category" className="horror category" onClick={() => { dispatch(getCategory(horror)); }}>
              Horror (
              {horror.length}
              )
            </Link>
          </li>

        </ul>

        {/* {action.map} */}

      </div>
    </main>
  );
};
export default Home;
