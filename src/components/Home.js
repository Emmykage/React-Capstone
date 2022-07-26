import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux/es/exports';
import { getMovieData } from '../redux/movie/movieAPI';
import MovieDisplay from './MovieDisplay';

const Home = () => {
  const movies = useSelector((state) => state.movies, shallowEqual);
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
            description={movie.description}
            image={movie.image}
          />
        ))}

      </div>
      <div className='categories'>
        <h2>Categories</h2>
        <div className='action'><Link to='action'>action</Link></div>
        <div className='drama'><Link to='drama'>drama</Link></div>
        {/* <div className='thriller'><Link to='action'></Link></div> */}
        <div className='anime'><Link to='anime'>anime</Link></div>
      </div>
    </main>
  );
};
export default Home;
