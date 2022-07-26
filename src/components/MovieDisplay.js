import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDetails } from '../redux/movie/details';

const MovieDisplay = (props) => {
  const dispatch = useDispatch();
  const {
    name, image, description, released,
  } = props;
  //   console.log(image);

  const displayHandle = () => {
    dispatch(setDetails({
      name, description, image,
    }));
  };

  return (

    <div>
      {name}

      <img src={image} alt="" />
      {released}
      <br />
      {/* {rating} */}
      <button type="button" onClick={displayHandle}>
        <Link to="detailspage">click</Link>
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
  // rating: PropTypes.number.isRequired,
};
export default MovieDisplay;
