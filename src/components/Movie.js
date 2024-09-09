import React from 'react';

function Movie({ title, rating, onDelete }) {
  return (
    <li className="movie-item">
      {title}{' '}
      {Array.from({ length: parseInt(rating, 10) }).map((_, i) => (
        <img key={i} src="/star.png" alt="Star" style={{ width: '20px', height: '20px' }} />
      ))}
      <img
        src="delete.png"
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={onDelete}
        style={{ cursor: 'pointer', width: '20px', height: '20px' }}
      />
    </li>
  );
}

export default Movie;
