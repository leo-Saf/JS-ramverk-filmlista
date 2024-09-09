import React, { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('0');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || rating === '0') {
      alert('Du måste ange både en titel och ett betyg.');
      return;
    }
    onAddMovie({ title, rating });
    setTitle('');
    setRating('0');
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>
        <label htmlFor="title-field">Titel:</label>
        <input
          type="text"
          id="title-field"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="rating-field">Betyg:</label>
        <select
          id="rating-field"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" className="btn-success" value="Spara film" />
      </fieldset>
    </form>
  );
}

export default AddMovieForm;
