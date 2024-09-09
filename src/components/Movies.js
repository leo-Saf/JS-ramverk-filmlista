import React from 'react';
import Movie from './Movie';

function Movies({ movies, onDeleteMovie }) {
  return (
    <ul id="movies">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          rating={movie.rating}
          onDelete={() => onDeleteMovie(index)}
        />
      ))}
    </ul>
  );
}

export default Movies;
