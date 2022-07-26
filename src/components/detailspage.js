import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = () => {
  const movie = useSelector((state) => state.details);
  const { name, description, image } = movie;
  return (
    <div className="mini-container">
      <div>
        {name}
        {description}
        <img src={image} />
      
      </div>
     

    </div>
  );
};

export default Details;
