import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDetails } from '../redux/movie/details';

const MovieDisplay = (props) => {
  const dispatch = useDispatch();
  const {
    name, image, description, released, rating,
  } = props;
  //   console.log(image);

  const displayHandle = () => {
    dispatch(setDetails({
      name, description, image, released,
    }));
  };

  return (

    <div className="movie-container">
      <div className="m-img">
        <img src={image} alt="" />
      </div>
      <div className="num-info">
        <h2>
          {' '}
          {name}
        </h2>
        <p>
          released date:
          {released}
        </p>
        <p>
          {' '}
          rating:
          {rating}
        </p>

      </div>
      <button type="button" onClick={displayHandle}>
        <Link to="/category/detailspage">  Play </Link>
        {' '}
      </button>

    </div>
  );
};
MovieDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
export default MovieDisplay;
