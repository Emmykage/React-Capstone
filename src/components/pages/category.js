import React from 'react';
import { useSelector } from 'react-redux';

const Category = () => {
  const movies = useSelector((state) => state.categories);
  return (
    <div>
      { movies.map((movie) => (
        <div key={movie.id}>
          {' '}
          {movie.name}
        </div>
      ))}

    </div>
  );
};
export default Category;
