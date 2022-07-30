import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDetails } from '../redux/movie/details';

const MovieDisplay = (props) => {
  const dispatch = useDispatch();
  const { name, image, description } = props;
  //   console.log(image);

  const displayHandle = () => {
    dispatch(setDetails({ name, description, image }));
  };

  return (

    <div>
      {name}

      <img src={image} alt="" />
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
};
export default MovieDisplay;
