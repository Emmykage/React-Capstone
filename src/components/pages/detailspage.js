import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai';
import { MdOutlineSpeakerPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Details = () => {
  const movie = useSelector((state) => state.details);
  // console.log('bar: '+ movie)
  const { name, description, image } = movie;
  return (
    <div className="display-movie">
      <div className="mobNav">

        <span><Link to="/"> back</Link></span>
        <span>category</span>
        <div>
          <span><AiFillSetting /></span>

          <span><MdOutlineSpeakerPhone /></span>

        </div>

      </div>
      <div className="det-display">
        <p>
          {' '}
          <span><Link to="/"> back</Link></span>
        </p>

        <div className="d-image">
          <img src={image} alt="" />
        </div>
        <div className="movie-info">
          <h2>{name}</h2>
          <hr />
          <p>
            {description}

          </p>
        </div>

      </div>

    </div>
  );
};

export default Details;
