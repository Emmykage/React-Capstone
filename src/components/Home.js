import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux/es/exports';
import { getCategory } from '../redux/movie/categories';
import { getMovieData } from '../redux/movie/movieAPI';
import MovieDisplay from './MovieDisplay';

const Home = () => {
  const movies = useSelector((state) => state.movies, shallowEqual);
  const action = movies.filter((movie) => movie.genres[0] === 'Action');
  const drama = movies.filter((movie) => movie.genres[0] === 'Drama');
  const horror = movies.filter((movie) => movie.genres[0] === 'Horror');
  console.log(horror);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <main className="container">

      <div className="row">
        {movies.map((movie) => (
          <MovieDisplay
            key={movie.id}
            name={movie.name}
            description={movie.summary}
            image={movie.image.medium}
          />
        ))}

      </div>
      <div className="categories">
        <h2>Categories</h2>

        {/* {action.map} */}

        <div className="action" onClick={() => { dispatch(getCategory(action)); }}><Link to="category">action</Link></div>
        <div className="drama" onClick={() => { dispatch(getCategory(drama)); }}><Link to="category">drama</Link></div>
        <div className="thriller" onClick={() => { dispatch(getCategory(thriller)); }}><Link to="category" /></div>
        <div className="horror" onClick={() => { dispatch(getCategory(horror)); }}><Link to="category">horror</Link></div>
      </div>
    </main>
  );
};
export default Home;
