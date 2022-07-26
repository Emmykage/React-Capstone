import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const movie = useSelector((state) => state.details);
  const { name, description, image } = movie;
  return (
    <div className="mini-container">
      <div>
        {name}
        {description}
        <img src={image} alt="" />

      </div>

    </div>
  );
};

export default Details;
