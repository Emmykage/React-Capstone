import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { MdOutlineSpeakerPhone } from 'react-icons/md';
import MovieDisplay from '../MovieDisplay';

const Category = () => {
  const movies = useSelector((state) => state.categories);

  return (

    <div className="contain">
      <div className="mobNav">

        <span><Link to="/"> back</Link></span>
        <span>category</span>
        <div>
          <span><AiFillSetting /></span>

          <span><MdOutlineSpeakerPhone /></span>

        </div>

      </div>

      <p className="left"><Link to="/"> back</Link></p>

      <div className="cat-contain row">

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
    </div>

  );
};
export default Category;
