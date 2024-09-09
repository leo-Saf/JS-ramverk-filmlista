import React, { useState } from 'react';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import OrderByAlphaButton from './components/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleOrderByAlpha = () => {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const handleOrderByGrade = () => {
    setMovies([...movies].sort((a, b) => b.rating - a.rating));
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <Movies movies={movies} onDeleteMovie={handleDeleteMovie} />
      <div>
        <button className="btn-blue" onClick={handleOrderByAlpha}>Order by Alphabet</button>
        <button className="btn-blue" onClick={handleOrderByGrade}>Order by Grade</button>
      </div>
    </div>
  );
}

export default App;
