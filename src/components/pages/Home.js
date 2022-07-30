import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai';
import { MdOutlineSpeakerPhone } from 'react-icons/md';
import { getMovieData } from '../../redux/movie/movieAPI';
import { getCategory } from '../../redux/movie/categories';

const Home = () => {
  const movies = useSelector((state) => state.movies);
  // console.log(movies);

  const action = movies.filter((movie) => movie.genres[0] === 'Action');
  const drama = movies.filter((movie) => movie.genres[0] === 'Drama');
  const horror = movies.filter((movie) => movie.genres[0] === 'Horror' || movie.genres[1] === 'Horror' || movie.genres[2] === 'Horror');
  const thriller = movies.filter((movie) => movie.genres[0] === 'Thriller' || movie.genres[1] === 'Thriller' || movie.genres[2] === 'Thriller');
  const comedy = movies.filter((movie) => movie.genres[0] === 'Comedy');
  const adventure = movies.filter((movie) => movie.genres[0] === 'Crime' || movie.genres[1] === 'Crime' || movie.genres[2] === 'Crime');
  const crime = movies.filter((movie) => movie.genres[0] === 'Comedy');
  const sciFy = movies.filter((movie) => movie.genres[0] === 'Science-Fiction' || movie.genres[1] === 'Science-Fiction' || movie.genres[2] === 'Science-Fiction');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <main className="page-container">
      <div className="mobNav">

        <span><Link to="/"> Home</Link></span>

        <div>
          <span><AiFillSetting /></span>

          <span><MdOutlineSpeakerPhone /></span>

        </div>

      </div>
      <div className="mobNav" />
      <h2 className="right">
        Search Results (
        {movies.length}
        )
      </h2>

      <div className=" home-contain">
        <h2 className="left">Movie by Genres</h2>
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
              <span>
                Drama(
                {drama.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="thriller category" onClick={() => { dispatch(getCategory(thriller)); }}>
              <span>
                Thriller(
                {thriller.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="horror category" onClick={() => { dispatch(getCategory(horror)); }}>
              <span>
                Horror (
                {horror.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="comedy category" onClick={() => { dispatch(getCategory(comedy)); }}>
              <span>
                Comedy (
                {comedy.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="adventure category" onClick={() => { dispatch(getCategory(adventure)); }}>
              <span>
                {' '}
                Adventure (
                {adventure.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="science-fiction category" onClick={() => { dispatch(getCategory(sciFy)); }}>
              <span>
                Science-Fiction (
                {sciFy.length}
                )
              </span>
            </Link>
          </div>
          <div className="col">
            <Link to="category" className="crime category" onClick={() => { dispatch(getCategory(crime)); }}>
              <span>
                Crime (
                {crime.length}
                )
              </span>
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
};
export default Home;
