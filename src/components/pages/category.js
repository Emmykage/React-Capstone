import React from 'react';
import { useSelector } from 'react-redux';
import MovieDisplay from '../MovieDisplay';

const Category = () => {
  const movies = useSelector((state) => state.categories);

  return (
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

  );
};
export default Category;
