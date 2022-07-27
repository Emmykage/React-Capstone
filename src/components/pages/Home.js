import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux/es/exports';
import { getCategory } from '../../redux/movie/categories';
import { getMovieData } from '../../redux/movie/movieAPI';

const Home = () => {
  const movies = useSelector((state) => state.movies, shallowEqual);
  // console.log(movies);

  const action = movies.filter((movie) => movie.genres[0] === 'Action');
  const drama = movies.filter((movie) => movie.genres[0] === 'Drama');
  const horror = movies.filter((movie) => movie.genres[0] === 'Horror');
  const thriller = movies.filter((movie) => movie.genres[0] === 'Thriller');
  const comedy = movies.filter((movie) => movie.genres[0] === 'Comedy');
  const adventure = movies.filter((movie) => movie.genres[0] === 'Crime');
  const crime = movies.filter((movie) => movie.genres[0] === 'Comedy');
  const sciFy = movies.filter((movie) => movie.genres[0] === 'Science-Fiction' || movie.genres[1] === 'Science-Fiction' || movie.genres[2] === 'Science-Fiction');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <main className="page-container">

      <div className=" home-contain">
        <h2>Categories</h2>
        <div className="categories row">

          <div className="col">
            <Link to="category" className="action category" onClick={() => { dispatch(getCategory(action)); }}>

              <span>
                {' '}
                Action(
                {action.length}
                )
              </span>

            </Link>
          </div>
          <div className="col">
            <Link to="category" className="drama category" onClick={() => { dispatch(getCategory(drama)); }}>

              Drama(
              {drama.length}
              )

            </Link>
          </div>
          <div className="col">
            <Link to="category" className="thriller category" onClick={() => { dispatch(getCategory(thriller)); }}>
              Thriller(
              {thriller.length}
              )
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="horror category" onClick={() => { dispatch(getCategory(horror)); }}>
              Horror (
              {horror.length}
              )
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="comedy category" onClick={() => { dispatch(getCategory(comedy)); }}>
              Comedy (
              {comedy.length}
              )
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="adventure category" onClick={() => { dispatch(getCategory(adventure)); }}>
              Adventure (
              {adventure.length}
              )
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="science-fiction category" onClick={() => { dispatch(getCategory(sciFy)); }}>
              Science-Fiction (
              {sciFy.length}
              )
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="crime category" onClick={() => { dispatch(getCategory(crime)); }}>
              Crime (
              {crime.length}
              )
            </Link>
          </div>

          {/* {action.map} */}

        </div>

        {/* {movies.map((movie) => (

          <MovieDisplay
            key={movie.id}
            name={movie.name}
            description={movie.summary}
            image={movie.image.medium}
            released={movie.premiered}
            rating={movie.rating.average}
          />
        )

        )} */}

      </div>

    </main>
  );
};
export default Home;
